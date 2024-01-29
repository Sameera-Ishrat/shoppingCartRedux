import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_,thunkAPI) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Something went wrong! ${response}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      //console.error(e);
      return thunkAPI.rejectWithValue({error:error.message});
    }
  }
);

const initialState = {
  products: [],
  isLoading : false,
  amount : 0, //amount is the quantity
  total : 0
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem :(state,{payload}) => {
const cartItem = state.products.find((product) => product.id === payload.id);
    //cartItem.amount = cartItem.amount + 1;
    
    if(cartItem){
        // Product is already in the cart, update quantity
        cartItem.amount = cartItem.amount + 1;
    }else {
        // Product is not in the cart, add a new cart item
        state.products.push({...payload,amount:1})
    }

},
removeItem: (state, { payload }) => {
    const cartItem = state.products.find((product) => product.id === payload.id);

    if (cartItem) {
      // Decrease quantity if item is in the cart
      if (cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      } else {
        // Remove the item if the quantity is 1 or less
        state.products = state.products.filter((product) => product.id !== payload.id);
      }
    }
    // Recalculate total after updating the cart
    state.total = state.products.reduce(
      (acc, product) => acc + product.amount * product.price,
      0
    );
  },
calculateTotal : (state, action) => {
    let amount = 0;
    let total = 0;
    state.products.forEach((product) => {
        // Check if product.amount is defined before adding to total
    if (typeof product.amount === 'number') {
        amount += product.amount;
        total += product.amount * product.price;
      }
    })
    console.log("Updated amount",amount)
    state.amount = amount;
    state.total = total;
    console.log('State after calculation:', state);
      },
  },

  extraReducers : (builder) => {
    builder.addCase(fetchProducts.pending,(state,action) => {
state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled,(state,action) => {
        console.log(action.payload);
state.isLoading = false;
// state.products = action.payload;
state.products = action.payload.map(product => ({ ...product, amount: 0 }));
    })
    .addCase(fetchProducts.rejected,(state,action) =>{
      console.log(action);
state.isLoading = false;
console.log("Error fetching data",action.errorMessage);
    })
  }
});
export default productSlice.reducer;
export const {addItem,calculateTotal,removeItem} = productSlice.actions;

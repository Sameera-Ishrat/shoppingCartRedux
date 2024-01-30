import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onCloseModal } from "../features/modal/modalSlice";
import { addItem, removeItem } from "../features/products/productSlice";
import { ChevronDown, ChevronUp } from "../icons";

const Modal = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) =>
    state.product.products.filter((product) => product.amount > 0)
  );
  const { total, id, amount,image } = useSelector((state) => state.product);

  const increaseItemHandler = (id) => {
    dispatch(addItem({ id }));
  };
  const removeItemHandler = (id) => {
    dispatch(removeItem({ id }));
  };

  // when clicked on quantity inside the modal should stay
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-container" onClick={() => dispatch(onCloseModal())}>
      <div className=" cart-modal">
        <div className="modal" onClick={(e) => stopPropagation(e)}>
          <div>
            <h2>Your cart</h2>
            <button
              onClick={() => dispatch(onCloseModal())}
              className="btn-close"
            >
              X
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <>
                    <li key={item.id}>
                        <div className="image-details">
                        <div className="cart-image">
                        <img src={item.image} alt={item.title} />
                            </div>
                        
                      {/* <h3>{item.title}</h3> */}
                      <h3>{item.title.length >30 ? item.title.slice(0,27)+"..." : item.title}</h3>
                      <p className="price">${(item.price*item.amount).toFixed(2)}</p>
                        </div>
                        
                     
                      <div className="qty-wrapper">
                        <p className="qty"> Quantity:</p>
                        <div className="btn-wrapper">
                          <button
                            className="prod-btn"
                            onClick={() => increaseItemHandler(item.id)}
                          >
                            <ChevronUp />
                          </button>
                          <p className="amount">{item.amount}</p>
                          <button
                            className="prod-btn"
                            onClick={() => removeItemHandler(item.id)}
                          >
                            <ChevronDown />
                          </button>
                        </div>
                      </div>
                    </li>
                    <hr />
                  </>
                ))}
              </ul>

              <hr />
              <div className="total">Total : ${total.toFixed(2)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

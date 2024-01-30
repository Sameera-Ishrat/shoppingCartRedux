import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="center error">
      <h2>404 Error</h2>
      <h3>Page not found</h3>
      <Link to="/" className="btn-error">Home</Link>
    </div>
  );
};

export default Error;

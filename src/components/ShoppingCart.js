import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="Scart"
      style={{
        display: visibility ? "block" : "none",
      }}
    >
      <div className="sCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <button
            className="btn close-btn"
            onClick={onClose}
          >
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cproducts">
          {products.length === 0 && (
            <span className="empty-text">
              Your basket is currently empty
            </span>
          )}
          {products.map((product) => (
            <div
              className="cart-product"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">
                  ${product.price * product.count}
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value))}
              >
                {[...Array(10).keys()].map(number => (
                  <option
                    value={number + 1}
                    key={number + 1}
                  >
                    {number + 1}
                  </option>
                ))}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btn checkout-btn">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;




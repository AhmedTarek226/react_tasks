import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Actions/cartAction";
import "./Card.css";

function Card(props) {
  const dispatch = useDispatch();

  function add(product) {
    // using local storage
    // console.log(product);
    // let cartItems = JSON.parse(localStorage.getItem("cart"));
    // cartItems.push(product);
    // localStorage.setItem("cart", JSON.stringify(cartItems));

    // using redux
    // console.log(product);
    dispatch(addToCart(product));
  }

  function remove(productTitle) {
    //using local storage
    // console.log("pro:"+product['title']);
    // let cartItems = JSON.parse(localStorage.getItem("cart"));
    // let p = cartItems.filter((item)=>item['title'] !== product['title']);
    // localStorage.setItem("cart", JSON.stringify(p));

    dispatch(removeFromCart(productTitle));
  }

  return (
    <div className="card my-3" style={{ width: "18 rem", height: "450px" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="d-grid gap-2">
          {props.isInCart === "false" ? (
            <button
              type="button"
              onClick={() => add(props)}
              className="btn btn-success"
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() => remove(props.title)}
              className="btn btn-danger"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import "./Cart.css";

function Cart(props) {
  ////////////////////////// using local storage/////////////////////////
  // const [products, setProducts] = useState(
  //   JSON.parse(localStorage.getItem("cart"))
  // );  
  // useEffect(() => {
  //   setProducts(JSON.parse(localStorage.getItem("cart")));
  // }, []);
  // useEffect(() => {
  //   setProducts(JSON.parse(localStorage.getItem("cart")));
  // }, [products]);

  ////////////////////////////using redux//////////////////////
  const products = useSelector(state=>state.cartReducer.cartItems);

  return (
    <div className="container">
      {products.length === 0 && <h1 className="text-center">Cart is empty</h1>}
      <div className="row">
        {products.map((product) => (
          <div className="col-4">
            <Card
              title={product["title"]}
              description={product["description"]}
              image={product["image"]}
              isInCart={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const dataCart = useSelector((store) => store.cartReducer);
    const dispatch = useDispatch()
    var totalPrice = 0;


  const listDataCart = dataCart.cartItems.map((product) => {
    totalPrice = totalPrice + product.itemPrice;
          const deleteItem = (product) => {
        dispatch({type: 'DELETE_ITEM_FROM_CART', payload: product})
    }
    return (
      <tr>
        <td> {product.itemName} </td>
        <td> {product.itemPrice}$ </td>
        <td>
            <button onClick={() => {deleteItem(product)}} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );

  });

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' })
  }



  return (
    <section className="product-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-1 p-4">
            <h2>My Cart</h2>
            <br />
            <table className="table table-bordered table table-striped table-dark text-center">
              <thead>
                <tr>
                  <td>Item Name</td>
                  <td>Item Price</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>{listDataCart}</tbody>
            </table>
            <h3>Total Price : {totalPrice}$ </h3>
            <button
              onClick={clearAll}
              className="btn btn-danger"
              disabled= {totalPrice === 0 ? true : false}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

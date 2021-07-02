import React from 'react'
import { useDispatch } from 'react-redux'

function Item({ doc }) {
    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch({type:'ADD_ITEM_TO_CART', payload: doc})
    }
    return (
      <div
        className="card text-center shadow rounded"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top"
          src={doc.itemImage}
          alt="Card image cap"
          style={{ width: "285px", height: "215px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title"> {doc.itemName} </h5>
          <p className="card-text">Price: {doc.itemPrice}$ </p>
          <button onClick={addItemToCart} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    );
}

export default Item

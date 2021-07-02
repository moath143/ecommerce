import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Additem() {
  const [prodName, setProdName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
    const dispatch = useDispatch()
    const history = useHistory()
    const addItem = () => {
        var doc = {
          itemName: prodName,
          itemImage: image,
          itemPrice: parseInt(price, 10)
        };
        dispatch({
            type: 'ADD_ITEM',
            paylod: doc
        })
        history.push('/')

  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <form className='mt-5'>
              <input
                value={prodName}
                onChange={(e) => {
                  setProdName(e.target.value);
                }}
                type="text"
                placeholder="Product Name"
                className="form-control"
              />
                          <input
                              style={{margin: '15px 0'}}
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="url"
                placeholder="Product Image"
                className="form-control"
              />
              <input
                value={price}
                onChange={(e) => {setPrice(e.target.value);}}
                type="number"
                placeholder="Product Price"
                className="form-control"
              />
              <button className='btn btn-success mt-3' onClick={addItem}>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Additem;

import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function Items() {
  const itemsData = useSelector((store) => store.itemsReducer);
  const [filtItem, setFiltItem] = useState(itemsData.itemsProduct);
  const [searchKey, setSearchKey] = useState("");
  const list = filtItem.map((doc, index) => {
    return (
      <div
        className="col-md-4 d-flex justify-content-center mt-4 mb-4"
        key={index}
      >
        <Item doc={doc} />
      </div>
    );
  });

    const filterItem = () => {
      
    const doupleList = itemsData.itemsProduct;
    const filteredList = doupleList.filter((item) =>
        item.itemName.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFiltItem(filteredList);
  };
  console.log(list);
  return (
    <section className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <form className="mt-5 mb-5">
              <input
                className="form-control"
                value={searchKey}
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
                onKeyUp={filterItem}
                type="search"
                placeholder="search item..."
              />
            </form>
          </div>
          {list}
        </div>
      </div>
    </section>
  );
}

export default Items;

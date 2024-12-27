import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Banner } from "../components/banner";
import pdtimg from "../assets/img5.png";

import Filter from "../api/data.json";

export const Product = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] =useState(false);
    const [error,setError]=useState(null);

    const fetchProdcuts = async()=>{
        
    }


  console.log(Filter);
  return (
    <>
      <Banner Text={"Products"} />

      <div className="container" id="productFilter">
        <div className="row">
          <div className="col-1">
            <h3>Filters</h3>
          </div>

          <div className="col-3">
            <select name="tags" id="tags" className="form-control">
              <option value="">All Tags</option>
              {Filter.tags.map((Element, index) => {
                return (
                  <option value={Element.value} key={index}>
                    {" "}
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3">
            <select name="brands" id="brands" className="form-control">
              <option value="">All Tags</option>
              {Filter.brands.map((Element, index) => {
                return (
                  <option value={Element.value} key={index}>
                    {" "}
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3">
            <select name="types" id="types" className="form-control">
              <option value="">All Tags</option>
              {Filter.types.map((Element, index) => {
                return (
                  <option value={Element.value} key={index}>
                    {" "}
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2">
            <button className="btn btn-primary form-control">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 " id="productCard">
            <div className="card border rounded border-dark">
              <img src={pdtimg} alt="" className="rounded m-2" />
              <div className="container p-3">
                <span>
                  <h4>
                    <strong>Name</strong>
                  </h4>
                  <p>Brand</p>
                </span>
                <span className="d-flex">
                  <strong>Price:</strong>
                  <p className="px-2">1234</p>
                </span>
                <span className="d-flex">
                  <strong>Rating:</strong>
                  <p className="px-2">1234</p>
                </span>
                <button className="btn btn-success form-control">
                  {" "}
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

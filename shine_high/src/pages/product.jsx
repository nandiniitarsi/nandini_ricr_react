import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Banner } from "../components/banner";
import Filter from "../api/data.json";
import err from '../assets/err1.gif';
import load from '../assets/load1.gif';

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProdcuts = async () => {
    setLoading(true);
    setError(null);
    const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

    try {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      setError("Error found during fetching the data" + e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //api call
    fetchProdcuts();
  }, []);

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
          {loading ? (
            <div className="container waiting">
              <img src={load} alt=""  className="align-item-center" width="max-content" height="max-content"/>
            </div>
          ) : error ? (
            <div className="container waiting">
              <img src={err} alt=""  className="align-item-center" width="max-content" height="max-content"/>
              <h4 className="align-item-center">{error}</h4>
            </div>
          ) : (
            products.map((Element) => {
              return (
                <div className="col-4 my-2 " id="productCard" key={Element.id}>
                  <div className="card border rounded border-dark">
                    <img
                      src={Element.api_featured_image}
                      alt=""
                      className="rounded m-2"
                    />
                    <div className="container p-3">
                      <span>
                        <h4>
                          <strong>{Element.name}</strong>
                        </h4>
                        <p>{Element.brand}</p>
                      </span>
                      <span className="d-flex">
                        <strong>Price:</strong>
                        <p className="px-2">₹ {parseInt(Element.price) * 90}</p>
                      </span>
                      <span className="d-flex">
                        <strong>Rating:</strong>
                        <p className="px-2">
                          {Element.rating === null ? 0 : Element.rating}/5
                        </p>
                      </span>
                      <button className="btn btn-success form-control">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-75 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    //footer
    

  );
}

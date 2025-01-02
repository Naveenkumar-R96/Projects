import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
      </div>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="category" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="category" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="category" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="category" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="category" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </>
  );
};

export default Category;

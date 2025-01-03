import React from "react";
import "./Products.css";

import Card from "../components/Card";

const Products = ({filterdData}) => {
  return (
    <>
      <section className="card-container">
      {filterdData}
      </section>
    </>
  );
};

export default Products;

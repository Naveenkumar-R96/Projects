import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import Card from "./components/Card";
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input Filter

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filterdItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio Filer

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button Filters

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filterdData(commingProducts, selected, query) {
    let filteredProducts = commingProducts;
    console.log(filteredProducts.length)

    //filtering input items

    if (query) {
      filteredProducts = filterdItems;
    }

    //selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  


return (
  <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products filterdData={ filterdData(products,selectedCategory,query)}/>

    </>
  );
};

export default App;

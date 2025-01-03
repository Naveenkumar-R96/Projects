import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>
      <div className="ml">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test1" />
          <span className="checkmark all" ></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="yellow"
        />


      <label htmlFor="" className="sidebar-label-container">
        <input type="radio"  onChange={handleChange} value='white' name="test1"/>
        <span style={{backgroundColor:'yellow'}}></span>
      </label>

      </div>
    </div>
  );
};

export default Colors;

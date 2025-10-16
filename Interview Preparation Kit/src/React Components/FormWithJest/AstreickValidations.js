import React from "react";
import "./styles.css";
const AstreickValidations = () => {
  return (
    <div className="container">
      <h1 className="heading">Astreick Validations</h1>
      <form className="form-group">
        <label htmlFor="name" className="label">
          Name <span className="asterick">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Enter your name"
        />
        <label htmlFor="location" className="label">
          Location <span className="asterick">*</span>
        </label>
        <input
          type="text"
          id="location"
          className="input"
          placeholder="Enter Location"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AstreickValidations;

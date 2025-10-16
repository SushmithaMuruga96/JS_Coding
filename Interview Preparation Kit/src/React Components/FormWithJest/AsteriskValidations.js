import React, { useState } from "react";
import "./styles.css";
const AsteriskValidations = () => {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Submitted successfully!");
    }
  };
  console.log("errors", errors);

  return (
    <div className="container">
      <h1 className="heading">Asterisk Validations</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="name" className="label">
          Name <span className="asterick">*</span>
        </label>
        <input
          type="text"
          id="name"
          data-testid="name-input"
          value={formData?.name}
          className={!errors?.name ? "input" : "input input-error"}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {errors?.name && (
          <span className="error-message" data-testid="name-error">
            {errors.name}
          </span>
        )}
        <label htmlFor="location" className="label">
          Location <span className="asterick">*</span>
        </label>
        <input
          type="text"
          id="location"
          data-testid="location-input"
          value={formData?.location}
          className={!errors.location ? "input" : "input input-error"}
          placeholder="Enter Location"
          onChange={handleChange}
        />
        {errors?.location && (
          <span className="error-message" data-testid="location-error">
            {errors.location}
          </span>
        )}
        <button
          type="submit"
          className="submit-button"
          data-testid="submit-button"
        >
          Submit
        </button>
        {successMessage && (
          <div className="success-message" data-testid="success-message">
            <p>{successMessage}</p>
            <p>Name: {formData?.name}</p>
            <p>Location: {formData?.location}</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default AsteriskValidations;

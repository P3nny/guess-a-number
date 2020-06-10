import React from "react";

import "./GuessBox.css";

export const GuessBox = ({ placeholder, handleChange }) => (
  <input
    className="guess"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

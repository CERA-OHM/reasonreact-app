/* App.js */

import React from 'react';
import './App.css';

// Import ReasonReact components
import Header from './Header.re';
import Square from './Square.re';



function App() {
  const name = "Patcharachai Ludla";
  
  // Generate 9 random colors
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  };

  const colors = Array.from({ length: 9 }, () => generateRandomColor());

  return (
    <div className="App">
      <Header name={name} />
      <div className="square-container">
        {colors.map((color, index) => (
          <Square key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;

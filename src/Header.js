import React from "react";

export default function Header(props) {
  return (
    //adds conditional darkMode class
    <header className={props.darkMode ? "dark" : ""}>
      <h1>Milo ·Stones</h1>

      <div className="reverse-btn-container">
        <button
          className="reverse-btn"
          id="reverse-btn"
          onClick={props.toggleReverse}
        >
          {props.reverse ? "Sort newest -> oldest" : "Sort oldest -> newest"}
        </button>
      </div>
      <div className="toggler--container">
        <p className="toggler--light">Light</p>
        <section
          className={props.darkMode ? "dark" : ""}
          onClick={props.toggleDarkMode}
        ></section>
        <p className="toggler--dark">Dark</p>
      </div>
    </header>
  );
}

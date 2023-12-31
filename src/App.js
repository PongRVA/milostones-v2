import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data";

export default function App() {
  //initialize darkMode state & reverse order to false
  const [darkMode, setDarkMode] = React.useState(false);
  const [reverse, setReverse] = React.useState(false);

  //handles toggle change and updates darkMode
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  function toggleReverse() {
    setReverse((prevOrder) => !prevOrder);
  }

  //maps through datafile, passes props to main component which
  //returns array of elements for rendering
  const miloStones = data.map((stone) => (
    <Main key={stone.id} stone={stone} darkMode={darkMode} />
  ));

  //adds conditional darkMode class to array of strings for className
  const containerAddDark = ["container", darkMode ? "darkMode" : ""].join(" ");

  return (
    <div className={containerAddDark}>
      <Header
        darkMode={darkMode}
        reverse={reverse}
        toggleReverse={toggleReverse}
        //pass in prop as function for onClick event
        toggleDarkMode={toggleDarkMode}
      />

      <div className="main--miloStones">
        {reverse ? miloStones : miloStones.reverse()}
      </div>
      <Footer />
    </div>
  );
}

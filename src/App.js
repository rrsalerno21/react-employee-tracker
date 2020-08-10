import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* Header/Nav */}
      <Header />

      {/* Main (contains state)
        Search Bar
        Container for results
          ComponentDidMount => display full query */}
      <Main />

      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
}

export default App;

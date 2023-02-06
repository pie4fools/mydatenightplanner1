import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutpage from "./components/Aboutpage";
import Formpage from "./components/Formpage";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutpage />
      <Formpage />
    </div>
  );
}

export default App;

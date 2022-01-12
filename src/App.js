import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";
import MyImage from "./components/MyImage";

function App() {
  return (
    <div className="app">
      <MyImage />
      <main className="main-area">
        <Info />
        <About />
        <Interest />
      </main>
      <Footer />
    </div>
  );
}

export default App;

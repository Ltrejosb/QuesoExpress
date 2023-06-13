import React from "react";
import Header from "./components/Navbar/Header";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";

const App = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

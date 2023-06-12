import React from "react";
import Header from "./components/Navbar/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

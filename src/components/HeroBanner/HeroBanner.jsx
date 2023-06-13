import React, { useEffect, useState } from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

  return (
    <div className={`hero-banner ${showBanner ? "show" : ""}`}>
      <div className="hero-content">
        <h1 className="hero-title">¡Descubre nuestros deliciosos quesos!</h1>
        <p className="hero-subtitle">Quesos artesanales de alta calidad</p>
      </div>
    </div>
  );
};

export default HeroBanner;

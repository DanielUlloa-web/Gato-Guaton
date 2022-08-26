import React from "react";
import Foto from "../assets/gato.jpg";

function Header() {
  return (
    <header>
      <img src={Foto} alt="Foto" className="foto" />
    </header>
  );
}

export default Header;

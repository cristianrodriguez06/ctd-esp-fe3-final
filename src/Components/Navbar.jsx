import React from 'react'


import { useContext } from "react";
import dental from "../images/dentist-logo-dental-health.png";

import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { providerValues } = useContext(ContextGlobal);
  const { dispatch } = providerValues;
  const { theme } = providerValues.state;
  
  return (
    <div className="dark" style={{ display: "flex" }}>
      <Link to="/home">
        <img style={{ width: 150 }} src={dental} alt="dental care logo" />
      </Link>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Home</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <button
        style={{ alignSelf: "center" }}
        className="buttonTheme"
        onClick={() =>
          theme === "light"
            ? dispatch({ type: "dark" })
            : dispatch({ type: "light" })
        }
      >
        Change theme
      </button>
    </div>

    // {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    // {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
  );
};
export default Navbar;
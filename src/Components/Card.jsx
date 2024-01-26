import React from "react";
import { useReducer } from "react";
import docImg from "../images/doctor.jpg";

import { Link } from "react-router-dom";

const Card = ({ onStorageChange,name, username, id, website, phone, email }) => {
  const exists = (id) => {
    const initialState = JSON.parse(localStorage.getItem("dentists")) || [];
    let isExist;

    if (initialState !== null || initialState > 0) {
      isExist = initialState.some((dent) => dent === id);
    }

    return isExist;
  };

  const initialState = {
    idsInStorage: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          idsInStorage: [state.idsInStorage, action.payload],
        };
      case "remove":
        return {
          idsInStorage: state.idsInStorage.filter(
            (id) => id !== action.payload
          ),
        };
      default:
        return state;
    }
  };

  const [ state, dispatch] = useReducer(reducer, initialState);

  // Aqui iria la logica para agregar la Card en el localStorage

  const addFav = (id) => {
    const idsStoraged = JSON.parse(localStorage.getItem("dentists")) || [];
    if (!idsStoraged.includes(id)) {
      const newIds = [...idsStoraged, id];
      localStorage.setItem("dentists", JSON.stringify(newIds));
      dispatch({ type: "add", payload: id });
      onStorageChange()
    }
    
  };

  const removeFav = (id) => {
    const idsStoraged = JSON.parse(localStorage.getItem("dentists")) || [];

    const newIds = idsStoraged.filter((e) => e !== id);

    localStorage.setItem("dentists", JSON.stringify(newIds));
    dispatch({ type: "remove", payload: id });
    onStorageChange()
  };

  return (
    <div
      className="card"
      style={{ color: "black", display: "flex", justifyContent: "center" }}
    >
      <Link style={{ color: "black" }} to={`/dentista/${id}`}>
        <img style={{ width: "150px" }} src={docImg} alt="" />

        <h3>{name}</h3>
        <h3>{username}</h3>
        {email && phone && website && (
          <div>
            <h5>{email}</h5>
            <h5>{phone}</h5>
            <h5>{website}</h5>
          </div>
        )}
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {!exists(id) ? (
        <button onClick={() => addFav(id)} className="favButton">
          Add fav
        </button>
      ) : (
        <button onClick={() => removeFav(id)} className="favButton">
          remove fav
        </button>
      )}
    </div>
  );
};

export default Card;
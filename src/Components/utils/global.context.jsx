import React from "react";
import axios from "axios";
import { createContext, useEffect, useMemo, useReducer, useState } from "react";

export const initialState = { theme: "light", data: [] };

const DentistContext = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [resp, setResp] = useState([]);

  try {
    const getFetch = async () => {
      const { data } = await axios.get(url);
      setResp(data);
    };
    useEffect(() => {
      getFetch();
    }, []);
  } catch (error) {
    console.log(error);
  }
  return resp;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: "dark" };
    case "light":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};
export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  initialState.data = DentistContext();
   
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  const providerValues = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <ContextGlobal.Provider value={{ providerValues }}>
      {children}
    </ContextGlobal.Provider>
  );
};

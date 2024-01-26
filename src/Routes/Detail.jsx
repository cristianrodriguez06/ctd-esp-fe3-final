
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const DentistFetch = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [resp, setResp] = useState([]);

    try {
      const getFetch = async () => {
        const { data } = await axios.get(url);
        //   console.log(data);
        setResp(data);
      };
      useEffect(() => {
        getFetch();
      }, []);
    } catch (error) {
      console.log(error);
    }
    // console.log(resp);

    return resp;
  };

  const dentistaByid = DentistFetch(id);
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      <div
        style={{height:'100vh',display: "flex", justifyContent: "center", color: "black" }}
      >
        <div>
        {
          <Card
            name={dentistaByid.name}
            username={dentistaByid.username}
            email={dentistaByid.email}
            phone={dentistaByid.phone}
            website={dentistaByid.website}
            id={dentistaByid.id}
          />
        }
        </div>
        
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;

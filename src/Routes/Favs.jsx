import React from "react";
import { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const [storageUpdated, setStorageUpdated] = useState(false)
  const [dentistsFromStorage, setDentistsFromStorage] = useState(
    JSON.parse(localStorage.getItem("dentists")) || []
  );
  const { providerValues } = useContext(ContextGlobal);

  const { data } = providerValues.state;

  const filteredDentists = data.filter((dentist) =>
    dentistsFromStorage.find((dent) => dent === dentist.id)
  );
  
  useEffect(() => {
    if(storageUpdated){
      const updatedDentists = JSON.parse(localStorage.getItem("dentists")) || [];
      setDentistsFromStorage(updatedDentists);
      setStorageUpdated(false)
      console.log(updatedDentists);
      
    }
    
  },[storageUpdated]);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div style={{ height: "100vh", marginBottom: 150 }}>
        <div className="card-grid">
          {filteredDentists.length > 0 ? (
            filteredDentists.map((dentist) => (
              <Card
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                onStorageChange={()=>setStorageUpdated(true)}
              />
            ))
          ) : (
            <h2>No Hay Asignados Dentistas Favoritos</h2>
          )}
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      </div>
    </>
  );
};

export default Favs;

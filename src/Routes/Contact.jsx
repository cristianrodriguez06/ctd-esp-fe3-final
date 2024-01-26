import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", marginBottom: 50, textAlign: "center" }}>
        <div>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;

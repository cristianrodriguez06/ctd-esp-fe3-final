import React from "react";

import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [form, setForm] = useState({
    name: "",
    email: "",
    submitted: false,
    message: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    

    setForm((prev) => ({
      ...prev,
      submitted: true,
      message:
        "gracias  " + prev.name + "  te contactaremos cuanto antes via Email",
    }));

    console.log(form);
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Complete Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {form.name.trim().length <= 5 && (
          <span style={{ color: "red" }}> Este campo es obligatorio</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {!isValidEmail(form.email) && (
          <span style={{ color: "red" }}> Verificar el formato de email</span>
        )}
        <button type="submit"> enviar </button>
      </form>
      {form.submitted && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <h2>{form.message}</h2>
        </div>
      )}
    </div>
  );
};

export default Form;
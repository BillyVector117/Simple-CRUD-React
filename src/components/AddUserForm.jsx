import React from "react";
import { useForm } from "react-hook-form"; // Libreria para usar forms facilmente

// COMPONENTE (Formulario para agregar un usuario)
const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm(); // Función elemental de 'useForm'
  const onSubmit = (data, e) => {
    // Al dar submit en el form, muestra por consola los datos
    console.log(data);
    props.addUser(data); // Usamos el 'metodo' de la 'variable' creada como props de addUserForm, pasandole por parametro la data del formulario typeado

    e.target.reset();
  };
  console.log(props); // Mostramos la data de la variable creada en App.js (en realidad es una función a ejecutar)
  return (
    // Form structure add User
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "required Input" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "required Input" },
        })}
      />
      <div>{errors?.username?.message}</div>

      <button>Add new user!</button>
    </form>
  );
};
export default AddUserForm;

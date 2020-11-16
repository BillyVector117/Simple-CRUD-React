import React from "react";
import { useForm } from "react-hook-form"; // Libreria para usar forms facilmente

// COMPONENTE (Formulario para agregar un usuario)
const EditUserForm = (props) => {
  console.log(props.currentUser);

  // Función elemental de 'useForm'
  const { register, errors, handleSubmit, setValue } = useForm({
    // Inicializar form con la data del user seleccionado por defecto
    defaultValues: props.currentUser,
  });
  // Poder usar el botóne edit varias veces, asi se cambiara el contenido del form edit dinamicamente
  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    // Al dar submit en el form, muestra por consola los datos
    console.log(data);

    data.id = props.currentUser.id; // Igualar el id con el que trae en props
    // Usamos la función para actualizar usuario, le pasamos a través de props el id y la data del form que acaba de typear para actualizarlo
    props.updateUser(props.currentUser.id, data);

    e.target.reset(); // Limpiar campos
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

      <button>Edit user!</button>
    </form>
  );
};
export default EditUserForm;

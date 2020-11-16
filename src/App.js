import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid"; // Libreria genera ID's
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  // Simulación array con varios objetos (users)
  const usersData = [
    // El id es generado con la libreria uuid
    { id: uuidv4(), name: "User 1", username: "username1" },
    { id: uuidv4(), name: "User 2", username: "username2" },
    { id: uuidv4(), name: "User 3", username: "username3" },
  ];

  // State, el estado users inicializa con los datos del array (usersData)
  const [users, setUsers] = useState(usersData);

  // Función agregar usuarios:
  const addUser = (user) => {
    // Recibe como parametro un user
    user.id = uuidv4(); // Generamos un id único para el usuario nuevo
    setUsers([
      // Llamada al modificador del state
      // Agregamos el nuevo usuario dentro del array, garantizando la data anterior
      ...users,
      user,
    ]);
  };

  // Función eliminar usuario:
  const deleteUser = (id) => {
    // Recibe por parametro un id (el user a eliminar)
    console.log("Deleting user: ", id);

    // Usamos el modificador para encontrar al usuario clickeado a eliminar
    // Desde setusers, filtramos la busqueda de users, si el user.id es distinto al id guardalo
    setUsers(users.filter((user) => user.id !== id)); // Filtrar todo lo que es distinto al id clickeado
  };

  // Función editar usuario:

  // Crear state para indicar que formulario mostrar (true/false)
  const [editing, setEditing] = useState(false); // Inicializar state en falso

  // Crear state para pasar la data de la tabla al form del usuario seleccionado para editar
  const [currentUser, setCurrentUser] = useState({
    // Comienza con las propiedades de un user pero vacio, tendremos que capturar la data de la tabla
    id: null,
    name: "",
    username: "",
  });
  const editRow = (user) => {
    // Recibimos el usuario a modificar
    setEditing(true); // Al editar, el setEditing (state cambiara a true, de lo contrario semostrara el form de crear usuario)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false); // El modificador sera falso , por lo que se mostrara el form de add user

    // Mapea el array de users, y si el id coincide usa el nuevo usuario, si no muestra el usuario normal
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
              ></EditUserForm>
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}></AddUserForm>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* Creamos una variable users y le pasamos la data del state a UserTable(component), (funciones a ejecutar como crud, props)*/}
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          ></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

// Llamar a los props (data recibida como variable en App.js en el state)
const UserTable = (props) => {
  console.log(props.users); // Mostramos la data de la variable creada en App.js (users, contiene el array users)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>
                <b>ID:</b> {user.id} - {user.name}
              </td>
              <td>{user.username}</td>
              <td>
                {/* Al dar click en Edit, se escucha el evento de setEditing (state), cambiara a true/false si es para editar o eliminar */}
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default UserTable;

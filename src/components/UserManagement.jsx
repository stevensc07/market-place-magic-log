import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Función para cargar los usuarios (ejemplo)
  const fetchUsers = () => {
    // Lógica para cargar usuarios desde la API
    const mockUsers = [
      { id: 1, name: "User 1", email: "user1@example.com" },
      { id: 2, name: "User 2", email: "user2@example.com" },
      { id: 3, name: "User 3", email: "user3@example.com" },
    ];
    setUsers(mockUsers);
  };

  // Llamar a fetchUsers al montar el componente (simulación)
  useState(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Gestión de Usuarios</h3>
      {/* Agrega aquí la lógica y la interfaz para gestionar usuarios */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

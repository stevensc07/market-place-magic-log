import React from "react";

const AdminStatistics = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">
        Estadísticas del Administrador
      </h3>
      {/* Agrega aquí el contenido de las estadísticas */}
      <p>Usuarios registrados: 100</p>
      <p>Productos en venta: 500</p>
      <p>Ventas realizadas hoy: 20</p>
    </div>
  );
};

export default AdminStatistics;

import React, { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  // Función para cargar los productos (ejemplo)
  const fetchProducts = () => {
    // Lógica para cargar productos desde la API
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ];
    setProducts(mockProducts);
  };

  // Llamar a fetchProducts al montar el componente (simulación)
  useState(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Gestión de Productos</h3>
      {/* Agrega aquí la lógica y la interfaz para gestionar productos */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;

import React, { useState } from "react";

export const ProductGrid = ({ products, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Cambia este valor según la cantidad de productos que desees mostrar por página

  if (!products || !filters) {
    return null;
  }

  // Verificar si hay filtros seleccionados
  const hasFilters =
    filters &&
    filters.some((filter) => {
      return filter.options && filter.options.some((option) => option.checked);
    });

  // Si no hay filtros seleccionados, mostrar todos los productos
  const filteredProducts = hasFilters
    ? products.filter((product) => {
        return filters.every((filter) => {
          return filter.options.some(
            (option) => option.checked && product[filter.id] === option.value
          );
        });
      })
    : products;

  // Calcular el índice del primer y último producto de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Si no hay productos después de aplicar los filtros, mostrar un mensaje indicando que no hay productos disponibles
  if (filteredProducts.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="bg-white mt-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-10 flex justify-center">
          {Array.from(
            { length: Math.ceil(filteredProducts.length / productsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 border border-gray-300 rounded-md ${
                  currentPage === i + 1 ? "bg-gray-200" : "bg-white"
                } hover:bg-gray-100 focus:outline-none`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

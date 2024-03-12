import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { ProductGrid } from "./ProductGrid";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "/product",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    color: "white",
    category: "new-arrivals",
    sku: "AB123",
    size: "2l",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "/product",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    color: "green",
    category: "sale",
    sku: "CD456",
    size: "6l",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "/product",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    color: "beige",
    category: "accessories",
    sku: "EF789",
    size: "12l",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    color: "black",
    category: "accessories",
    sku: "GH012",
    size: "2l",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "/product",
    price: "$8",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    color: "white",
    category: "new-arrivals",
    sku: "IJ345",
    size: "2l",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "/product",
    price: "$5",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    color: "green",
    category: "sale",
    sku: "KL678",
    size: "2l",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "/product",
    price: "$849",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    color: "beige",
    category: "accessories",
    sku: "MN901",
    size: "12l",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "/product",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    color: "black",
    category: "accessories",
    sku: "OP234",
    size: "2l",
  },
];

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [];

const filters = [
  {
    id: "category",
    name: "Category",
    inputType: "text",
    placeholder: "Search by category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: false },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "name",
    name: "Name",
    inputType: "text",
    placeholder: "Search by name",
  },
  {
    id: "sku",
    name: "SKU",
    inputType: "text",
    placeholder: "Search by SKU",
  },
  {
    id: "price",
    name: "Price",
    inputType: "number",
    placeholder: "Enter price range",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CategoryFilters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sku, setSku] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    // Función para filtrar los productos
    const filterProducts = () => {
      let filtered = products.filter(
        (product) =>
          (searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
          (sku === "" ||
            product.sku.toLowerCase().includes(sku.toLowerCase())) &&
          (categoria === "" ||
            product.category.toLowerCase().includes(categoria.toLowerCase())) &&
          (minPrice === "" ||
            maxPrice === "" ||
            (parseInt(product.price.slice(1)) >= parseInt(minPrice) &&
              parseInt(product.price.slice(1)) <= parseInt(maxPrice))) &&
          selectedFilters.every((filter) => product[filter.id] === filter.value)
      );
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [selectedFilters, searchQuery, minPrice, maxPrice, sku, categoria]);

  const handleSortOptionChange = (optionName) => {
    let sortedProducts = [...filteredProducts];
    switch (optionName) {
      case "Price: Low to High":
        sortedProducts.sort(
          (a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1))
        );
        break;
      case "Price: High to Low":
        sortedProducts.sort(
          (a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1))
        );
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const handleFilterChange = (filterId, optionValue, isChecked) => {
    setSelectedFilters((prevFilters) =>
      isChecked
        ? [...prevFilters, { id: filterId, value: optionValue }]
        : prevFilters.filter(
            (filter) =>
              !(filter.id === filterId && filter.value === optionValue)
          )
    );
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories &&
                        subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                    </ul>

                    {filters.map((filter) => (
                      <div key={filter.id} className="px-4 py-6">
                        <label
                          htmlFor={filter.id}
                          className="block text-sm font-medium text-gray-900"
                        >
                          {filter.name}
                        </label>
                        <div className="mt-1">
                          {filter.id === "category" ? (
                            <input
                              type="text"
                              name={filter.id}
                              id={filter.id}
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder={filter.placeholder}
                              value={categoria}
                              onChange={(e) => setCategoria(e.target.value)}
                            />
                          ) : filter.id === "sku" ? (
                            <input
                              type="text"
                              name={filter.id}
                              id={filter.id}
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder={filter.placeholder}
                              value={sku}
                              onChange={(e) => setSku(e.target.value)}
                            />
                          ) : filter.id === "price" ? (
                            <div className="flex">
                              <input
                                type="number"
                                name="minPrice"
                                id="minPrice"
                                className="block w-full border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                              />
                              <input
                                type="number"
                                name="maxPrice"
                                id="maxPrice"
                                className="block w-full border-gray-300 rounded-r-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                              />
                            </div>
                          ) : (
                            <input
                              type={filter.inputType}
                              name={filter.id}
                              id={filter.id}
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder={filter.placeholder}
                              value={filter.id === "name" ? searchQuery : ""}
                              onChange={(e) =>
                                filter.id === "name"
                                  ? setSearchQuery(e.target.value)
                                  : handleFilterChange(
                                      filter.id,
                                      e.target.value,
                                      true
                                    )
                              }
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => {
                                handleSortOptionChange(option.name);
                                setMobileFiltersOpen(false);
                              }}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories &&
                    subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                </ul>
                {filters.map((filter) => (
                  <div key={filter.id} className="px-4 py-6">
                    <label
                      htmlFor={filter.id}
                      className="block text-sm font-medium text-gray-900"
                    >
                      {filter.name}
                    </label>
                    <div className="mt-1">
                      {filter.id === "category" ? (
                        <input
                          type="text"
                          name={filter.id}
                          id={filter.id}
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder={filter.placeholder}
                          value={categoria}
                          onChange={(e) => setCategoria(e.target.value)}
                        />
                      ) : filter.id === "sku" ? (
                        <input
                          type="text"
                          name={filter.id}
                          id={filter.id}
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder={filter.placeholder}
                          value={sku}
                          onChange={(e) => setSku(e.target.value)}
                        />
                      ) : filter.id === "price" ? (
                        <div className="flex">
                          <input
                            type="number"
                            name="minPrice"
                            id="minPrice"
                            className="block w-full border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                          <input
                            type="number"
                            name="maxPrice"
                            id="maxPrice"
                            className="block w-full border-gray-300 rounded-r-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                          />
                        </div>
                      ) : (
                        <input
                          type={filter.inputType}
                          name={filter.id}
                          id={filter.id}
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder={filter.placeholder}
                          value={filter.id === "name" ? searchQuery : ""}
                          onChange={(e) =>
                            filter.id === "name"
                              ? setSearchQuery(e.target.value)
                              : handleFilterChange(
                                  filter.id,
                                  e.target.value,
                                  true
                                )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductGrid
                  products={filteredProducts}
                  filters={selectedFilters}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

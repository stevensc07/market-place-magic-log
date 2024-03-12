import React, { useState, useContext, useEffect } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { ShoppingCart } from "../ShoppingCart";
import { Login } from "../Login";
import { AppContext } from "../../context/AppContext";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/catalog",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = ({ showNavbar }) => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const { handleLogout } = useContext(AppContext);

  const logout = () => {
    handleLogout();

    // You can also perform any additional logout-related tasks here
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: { token } });
    }
    // Obtenemos el nombre de usuario del estado global después de cargar la página
    if (state?.firstName) {
      setFirstName(state?.firstName);
    }
  }, [dispatch, state?.firstName]);

  const handleCartClick = (e) => {
    e.preventDefault();
    setIsCartOpen(true);
  };
  const handleToggleMenu = () => {
    setOpen(!open); // Cambia el estado de open cuando se hace clic en el botón
  };
  const handleLoginClick = () => {
    setShowLogin(true);
  };

  // Función para abrir el modal de inicio de sesión
  const handleOpenLoginModal = () => {
    setShowLogin(true);
  };
  return (
    <nav className={showNavbar == "admin" ? "hidden" : "block"}>
      <div className="bg-white fixed w-full z-20 top-0 start-0">
        {/* Mobile menu */}
        <MobileMenu
          open={open}
          onClose={setOpen}
          navigation={navigation}
          classNames={classNames}
        />
        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="/home">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>

                {/* Desktop menus */}
                <DesktopMenu
                  categories={navigation.categories}
                  pages={navigation.pages}
                  classNames={classNames}
                />

                <div className="ml-auto flex items-center">
                  {firstName ? (
                    <>
                      <span className="text-sm font-medium text-gray-700">
                        {firstName}
                      </span>
                      <button
                        onClick={logout}
                        className="text-sm font-medium text-gray-700 ml-4 hover:text-gray-800 focus:outline-none focus:underline"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleOpenLoginModal}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:underline"
                      >
                        Sign in
                      </button>
                      <span
                        className="h-6 w-px bg-gray-200 mx-4"
                        aria-hidden="true"
                      />
                      <button
                        onClick={handleOpenLoginModal}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:underline"
                      >
                        Create account
                      </button>
                    </>
                  )}

                  <div className="hidden lg:ml-8 lg:flex">
                    <a
                      href="#"
                      className="flex items-center text-gray-700 hover:text-gray-800"
                    >
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-sm font-medium">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  {/* Cart */}
                  {isCartOpen && (
                    <ShoppingCart
                      setIsCartOpen={setIsCartOpen}
                      isCartOpen={isCartOpen}
                    />
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a
                      href="/shoppingcart"
                      className="group -m-2 flex items-center p-2"
                      onClick={handleCartClick}
                    >
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Login modal */}
        {/* Login modal */}
        {showLogin && (
          <Login
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            onSuccess={() => setShowLogin(false)}
          />
        )}
      </div>{" "}
    </nav>
  );
};

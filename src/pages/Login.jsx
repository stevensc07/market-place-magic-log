import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isSeller, setIsSeller] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsLogin(true);
    setIsSeller(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsSeller(false);
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  const handleSellerClick = () => {
    setIsSeller(true);
  };

  const handleBuyerClick = () => {
    setIsSeller(false);
  };

  return (
    <Fragment>
      <button onClick={openModal} className="text-blue-600 mt-96">
        Open Modall
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          {isLogin ? (
            <div className="flex items-center justify-center w-screen h-screen z-50">
              <div className="bg-white rounded-lg p-8 max-w-md">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600"
                >
                  Close
                </button>
                <section>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to Squid 🦑
                  </h1>
                  <p className="text-sm text-gray-700 mb-4">
                    Please enter your email and password to login.
                  </p>
                  <form action="#" className="grid grid-cols-1 gap-4">
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                      Login
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-2">
                    Don't have an account?{" "}
                    <button
                      onClick={handleSignUpClick}
                      className="text-blue-500 underline"
                    >
                      Sign Up
                    </button>
                  </p>
                </section>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-screen h-screen z-50">
              <div className="bg-white rounded-lg p-8 max-w-md">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600"
                >
                  Close
                </button>
                <section>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Sign Up 📝
                  </h1>
                  <p className="text-sm text-gray-700 mb-4">
                    Choose your account type:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={handleSellerClick}
                      className={`w-full py-2 ${
                        isSeller ? "bg-blue-500 text-white" : "bg-gray-200"
                      } rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                    >
                      Seller
                    </button>
                    <button
                      onClick={handleBuyerClick}
                      className={`w-full py-2 ${
                        !isSeller ? "bg-blue-500 text-white" : "bg-gray-200"
                      } rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                    >
                      Buyer
                    </button>
                  </div>
                  <form action="#" className="grid grid-cols-1 gap-4 mt-4">
                    <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="LastName"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      placeholder="Password Confirmation"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                      Sign Up
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-2">
                    Already have an account?{" "}
                    <button
                      onClick={handleLoginClick}
                      className="text-blue-500 underline"
                    >
                      Login
                    </button>
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      </Transition>
    </Fragment>
  );
};

import React, { Fragment, useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
export const Login = ({ showLogin, setShowLogin, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(showLogin);
  const [isLogin, setIsLogin] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    accountType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(showLogin);
  }, [showLogin]);

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (typeof onSuccess === "function") {
      onSuccess();
    }
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    setIsVisible(true);
    let role;
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      if (response.data.firstName === "Admin") {
        role = "admin";
        localStorage.setItem("role", role);
        navigate("/admin");
      } else {
        setSuccessMessage("Login successful. Redirecting to home...");

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: response.data.token,
            firstName: response.data.firstName,
            role: role,
          },
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("firstName", response.data.firstName);

        setTimeout(() => {
          navigate("/home");
          setIsOpen(false);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrorMessage("User not found.");
        } else if (error.response.status === 401) {
          setErrorMessage("Invalid password.");
        } else {
          setErrorMessage("Internal server error.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        accountType: isSeller ? "seller" : "buyer",
      });
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: {
          token: response.data.token,
          firstName: response.data.firstName,
        },
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("firstName", response.data.firstName);

      setTimeout(() => {
        navigate("/home");
        setIsOpen(false);
      }, 1000);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
        setSuccessMessage("");
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  return (
    <Fragment>
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
              <div className="bg-white rounded-lg p-8 max-w-md relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <section>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Magic-Market 🛍️
                  </h1>
                  <p className="text-sm text-gray-700 mb-4">
                    Please enter your email and password to login.
                  </p>
                  <form
                    onSubmit={handleLoginSubmit}
                    className="grid grid-cols-1 gap-4"
                  >
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Login
                    </button>
                  </form>
                  {errorMessage && isVisible && (
                    <>
                      <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                      >
                        <strong className="font-bold">Oops! </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                        <button
                          onClick={handleClose}
                          className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                          <svg
                            className="fill-current h-6 w-6 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                  {successMessage && (
                    <>
                      <div
                        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4"
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="fill-current h-6 w-6 text-teal-500 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Perfect!! </p>
                            <p className="text-sm">{successMessage}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-green-500 mt-2"></p>
                    </>
                  )}
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
              <div className="bg-white rounded-lg p-8 max-w-md relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
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
                  <form
                    onSubmit={handleSignUpSubmit}
                    className="grid grid-cols-1 gap-4 mt-4"
                  >
                    <input
                      type="text"
                      id="FirstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="LastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
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
                  {errorMessage && isVisible && (
                    <>
                      <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                      >
                        <strong className="font-bold">Oops! </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                        <button
                          onClick={handleClose}
                          className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                          <svg
                            className="fill-current h-6 w-6 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                  {successMessage && (
                    <>
                      <div
                        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4"
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="fill-current h-6 w-6 text-teal-500 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Perfect!! </p>
                            <p className="text-sm">{successMessage}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-green-500 mt-2"></p>
                    </>
                  )}

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

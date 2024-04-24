import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./assets/components/AddCoffee.jsx";
import UpdateCoffee from "./assets/components/UpdateCoffee.jsx";
import SignIn from "./assets/components/SignIn.jsx";
import SignUp from "./assets/components/SignUp.jsx";
import AuthProvider from "./assets/components/AuthProvider/AuthProvider.jsx";
import Users from "./assets/components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffe-store-server-ruddy.vercel.app/coffee"),
  },

  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(`https://coffe-store-server-ruddy.vercel.app/coffee/${params.id}`),
  },

  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },

  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },

  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffe-store-server-ruddy.vercel.app/users"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

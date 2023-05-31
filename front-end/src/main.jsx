import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Cadastro from "./routes/Cadastro.jsx"
import Login from "./routes/Login.jsx"
import Home from "./routes/Home.jsx"
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/1",
    element: <Cadastro />,
  },
  {
    path: "contacts/2",
    element: <Home />,
  },
  {
    path: "contacts/3",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

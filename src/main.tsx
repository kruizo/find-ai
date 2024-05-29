import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage.tsx";
import About from "./About.tsx";
import Abouts from "./Abouts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "search/:params",
    //     element: <Cards />,
    //   },
    // ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Abouts />,
    children: [
      {
        path: ":id",
        element: <About />,
      },
    ],
  },

  {
    path: "/contact",
    element: <App />,
  },
  {
    path: "/howtouse",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

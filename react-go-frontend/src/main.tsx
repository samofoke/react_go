import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import HomeCentral from "./components/home/home-page/home-central.tsx";
import { ErrorPage } from "./components/error-page/error.tsx";
import "./index.css";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesSection from "./components/movies/movies.tsx";
import Genres from "./components/genres/genres.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeCentral /> },
      { path: "/movies", element: <MoviesSection /> },
      { path: "/genres", element: <Genres /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

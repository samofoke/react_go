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
import EditMovie from "./components/edit-movie/edit-movie.tsx";
import ManageCatalogue from "./components/manage-catalogue/manage-catalogue.tsx";
import GraphQL from "./GraphQL/GraphQL.tsx";
import Login from "./components/auth/login/login.tsx";
import Movies from "./components/movies/movie.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeCentral /> },
      { path: "/movies", element: <MoviesSection /> },
      { path: "/movies/:id", element: <Movies /> },
      { path: "/genres", element: <Genres /> },
      { path: "/edit-movie/movie/0", element: <EditMovie /> },
      { path: "/manage-catalogue", element: <ManageCatalogue /> },
      { path: "/graphql", element: <GraphQL /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

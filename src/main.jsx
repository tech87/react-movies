import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Root from './routes/Root';
import MovieDetails from './components/MovieDetails'
import Favorites from './components/Favorites';
import Manage from "./components/Manage";
import { initDb, seed } from "./database/db";

// We create the database store and seed it with data
initDb();
// We seed it only once, so we don't overwrite user changes
await seed();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      // If you want to clear data and restart, you go here
      {
        path: "/manage",
        element: <Manage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import MovieList from './components/MovieList';
import './index.css'
import Root from './routes/Root';
import MovieDetails from './components/MovieDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    {
      path: "/",
      element: <App />
    },
       {
        path: "/:movieId",
        element: <MovieDetails />
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

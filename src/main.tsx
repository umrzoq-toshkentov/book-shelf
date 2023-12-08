import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APIProvider, ThemeProvider } from "./providers";
import { ErrorPage, HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/book-shelf",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <APIProvider>
        <RouterProvider router={router} />
      </APIProvider>
    </ThemeProvider>
  </React.StrictMode>
);

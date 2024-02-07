import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App.jsx";
import "./index.css";

// Render aplikasi dengan router dan layout
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </React.StrictMode>
);

reportWebVitals()

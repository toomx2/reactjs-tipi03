import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

//Rota dinâmica
import Product from './routes/Product.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from './routes/ErrorPage.jsx';

// Website Routes

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "sobre",
                element: <About />
            },
            {
                path:"products/:id",
                element: <Product />
            }
        ],
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>,
);
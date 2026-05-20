import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <h1>
                React Routes
            </h1>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default App;
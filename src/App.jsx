import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import TemplatePage from "./pages/Pria/ProdukTerbaru.jsx";
import { ProductDetail } from "./component/viewDetail.jsx";
import ErrorPage from "./pages/ErrorPages.jsx";
import NavbarComponent from "./component/NavbarComponent.jsx";
import { ListMenu } from "./Data/DataGlobal.jsx";
import FooterComponent from "./component/Footer.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/:parentName/:subName"
                        element={<TemplatePage />}
                    />
                    <Route path="/Product/:name" element={<ProductDetail />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
};

export default App;

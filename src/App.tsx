import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Introduce from "./pages/Introduce/Introduce";
import Service from "./pages/service/Service";
import DetailProduct from "./pages/detailProduct/DetailProduct";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<DetailProduct />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

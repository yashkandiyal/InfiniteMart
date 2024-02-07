// App.jsx

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import StorePage from "./Components/StoreItems/StorePage";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import PurchasedItems from "./Components/ItemsPurchased/PurchasedItems";
import WatchesPage from "./Components/watchespage/watchesPage";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/storeitems" element={<StorePage />} />
        <Route path="/" element={<HomeComponent />} />
        <Route path="/purchaseditems" element={<PurchasedItems />} />
        <Route path="/watches" element={<WatchesPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

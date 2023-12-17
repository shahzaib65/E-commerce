import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/productDetails" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

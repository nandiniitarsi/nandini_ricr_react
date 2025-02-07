import React from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Footer } from "./components/footer";
import { Product } from "./pages/product";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
          </Routes>

        </main>

        <footer>
          <Footer/>
        </footer>
      </Router>
    </>
  );
}

export default App;

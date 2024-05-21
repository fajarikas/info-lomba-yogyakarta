import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Competition from "./Pages/Competition/Competition";
import Navbar from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

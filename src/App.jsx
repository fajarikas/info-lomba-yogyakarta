import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Competition from "./Pages/Competition/Competition";
import Navbar from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import CompetitionMenu from "./Components/Competitions/CompetitionMenu";
import About from "./Pages/About/About";
import UploadCompetition from "./Pages/UploadCompetition/UploadCompetition";
import CompetitionDetail from "./Pages/Competition/CompetitionDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition/all" element={<Competition />} />
        <Route path="/competition/:id" element={<CompetitionDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload/competition" element={<UploadCompetition />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

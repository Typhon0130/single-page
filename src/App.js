import "./App.css";
import React, { useEffect } from "react";
import Main from "./pages/main/";
import LandingPage from './pages/landing'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
    Aos.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

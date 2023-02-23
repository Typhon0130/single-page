import "./App.css";
import React, { useEffect } from "react";
import Main from "./pages/main/main";
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
      </Routes>
    </Router>
  );
}

export default App;

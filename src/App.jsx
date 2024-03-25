import { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import DefaultPage from "./components/DefaultPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import ProjectsPage from "./components/ProjectsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("render");
    navigate("/");
  }, []);
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

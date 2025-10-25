import React from "react";
import "./App.css";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar, Footer, PageTransition, MusicPlayer } from "./components";
import { About, Contact, Home, Projects, Blog } from "./pages";

function AnimatedRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/blog"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      {!isHomePage && <Footer />}
    </>
  );
}

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen">
      <Navbar />
      <AnimatedRoutes />
      <MusicPlayer />
    </main>
  );
};

export default App;

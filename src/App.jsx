import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar, Footer, PageTransition } from "./components";
import { About, Contact, Home, Projects, Blog } from "./pages";

function AnimatedRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
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
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </main>
  );
};

export default App;

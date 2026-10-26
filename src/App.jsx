import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { useState, useEffect } from "react";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
      window.addEventListener("load", window.AOS.refresh);
    }
  });
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-navy text-slate-400 antialiased selection:bg-accent/20 selection:text-cream">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-duration-300 hidden lg:block"
          style={{
            background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 90%)`,
          }}
        />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

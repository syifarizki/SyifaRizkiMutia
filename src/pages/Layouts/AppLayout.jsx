import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main id="mainContent" className="max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

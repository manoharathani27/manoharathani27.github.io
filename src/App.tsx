import { Routes, Route } from "react-router-dom";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

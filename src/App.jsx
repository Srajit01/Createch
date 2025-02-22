import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import LearnMore from './pages/LearnMore';
import RenewableMaterials from './pages/features/RenewableMaterials';
import MarineProtection from './pages/features/MarineProtection';
import EnergyEfficiency from './pages/features/EnergyEfficiency';
import WasteManagement from './pages/features/WasteManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/features/renewable-materials" element={<RenewableMaterials />} />
          <Route path="/features/marine-protection" element={<MarineProtection />} />
          <Route path="/features/energy-efficiency" element={<EnergyEfficiency />} />
          <Route path="/features/waste-management" element={<WasteManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
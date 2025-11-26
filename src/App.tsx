import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import { Agents } from './pages/Agents';
import NeighborhoodsPage from './pages/Neighborhoods';
import NeighborhoodDetail from './pages/NeighborhoodDetail';
import ComparePage from './pages/Compare';
import { Toaster } from 'sonner';
import { ComparisonProvider } from './contexts/ComparisonContext';
import ComparisonTray from './components/ComparisonTray';

function App() {
  return (
    <ComparisonProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
              <Route path="/neighborhoods/:id" element={<NeighborhoodDetail />} />
              <Route path="/compare" element={<ComparePage />} />
            </Routes>
          </main>
          <Footer />
          <ComparisonTray />
          <Toaster richColors />
        </div>
      </Router>
    </ComparisonProvider>
  );
}

export default App;

// Shift + Alt + F to auto indent
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import VentureDetails from './components/VentureDetails';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="/venture/:id" element={<VentureDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}; 

export default App;
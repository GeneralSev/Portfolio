// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import VentureDetails from './components/VentureDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="/venture/:id" element={<VentureDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
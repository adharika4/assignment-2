import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <div>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Signin/>} />
        </Routes>
      </div>
    </Router>
    </BrowserRouter>
    
  );
};

export default App;


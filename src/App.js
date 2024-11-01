import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';


function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <Router>
      <Routes>
        {/* Pass sidebar and setSidebar as props to Home */}
        <Route path="/" element={<Home sidebar={sidebar} setSidebar={setSidebar} />} />
      </Routes>
    </Router>
  );
}

export default App;

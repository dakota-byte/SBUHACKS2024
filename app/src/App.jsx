import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Drawing from './Drawing';
import Feed from './Feed';
import Profile from './Profile';
import background from './assets/background.png';

import KyleTest from './test.jsx'
const App = () => {
  const backgroundStyles = {
    backgroundImage: `url(${background})`, // Use the imported image in the background URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
  };

  return (
    <Router>
      <div style={backgroundStyles} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/KyleTest" element={<KyleTest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

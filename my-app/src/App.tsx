import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import FooterContainer from './components/FooterContainer';
import Home from './pages/home';

function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
      {showFooter && <FooterContainer />}
    </div>
  );
}

export default App;

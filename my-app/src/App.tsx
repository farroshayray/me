import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Greetings from './components/Greetings';
import FooterContainer from './components/FooterContainer';
import BlankContent from './components/BlankContent';

function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showGreeting, setShowGreeting] = useState(true);
  const [showBlank, setShowBlank] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  return (
    <div className="App">
      {showNavBar && <NavBar />}
      {showGreeting && <Greetings/>}
      {showBlank && <BlankContent />}
      {showFooter && <FooterContainer />}
    </div>
  );
}

export default App;

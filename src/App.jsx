//import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;


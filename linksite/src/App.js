import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Stats from './components/Stats/stats';
import Loading from './components/loading';
import React, { useState, useEffect } from 'react';
import Features from './components/Features/features';
import Quote from './components/Quote/quote';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <Features />
          <Quote />
        </>
      )}
    </div>
  );
}

export default App;

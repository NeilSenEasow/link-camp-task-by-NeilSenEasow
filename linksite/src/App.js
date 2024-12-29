import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Stats from './components/Stats/stats';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stats />
    </div>
  );
}

export default App;

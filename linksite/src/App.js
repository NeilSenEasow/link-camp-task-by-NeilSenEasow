import './App.css';
import About from './components/about';
import Contact from './components/contact';
import OfficeBearers from './components/officebearers';
import Resources from './components/resources';
import IEEELinked from './components/ieeelinked';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>IEEE LINK</h1>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#office-bearers">Office Bearers</a>
          <a href="#ieee-linked">IEEE Linked</a>
          <a href="#resources">Resources</a>
          <a href="#about">About Us</a>
        </div>

        <div className="social-icons">
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
        </div>
      </nav>

      <div className="main-content">
        <About />
        <Contact />
        <OfficeBearers />
        <Resources />
        <IEEELinked />
      </div>
    </div>
  );
}

export default App;

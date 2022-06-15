import './App.css';
import About from './components/About';
import NavBar from './components/Nav'
import Experience from './components/Experience';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Education from './components/Education';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <About />
    <Experience />
    <Project/>
    <Education/>
    <ContactForm/>
    </div>
  );
}

export default App;

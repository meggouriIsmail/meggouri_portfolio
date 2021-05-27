import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

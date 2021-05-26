import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>

      <Nav />
     <Header/>
      </Router>
    </div>
  );
}

export default App;

import logo from './icon/18AGAIN-icon.png'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './page/home';
import Creat from './page/creat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/creat' element={<Creat/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/home">Click to home page</Link>
      </header>
      <Outlet />
    </div>
  );
}


export default App;

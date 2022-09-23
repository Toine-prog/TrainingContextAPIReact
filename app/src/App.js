import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import { Home, Page1, Page2 } from './pages';
import { NavMenu } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

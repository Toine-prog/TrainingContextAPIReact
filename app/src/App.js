import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import { Home, Page1, Page2 } from './pages';
import { NavMenu } from './components';
import { useDarkMode } from './useDarkMode';


const ThemeContext = React.createContext(null);
export { ThemeContext};

function App() {

  const {theme, changeMode} = useDarkMode()

  return (
    <ThemeContext.Provider value={{theme, changeMode}}>
    <div className="App" style={{background: theme.background, color: theme.foreground}}>
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

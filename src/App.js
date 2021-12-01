import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './Context/Context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "#CAD7F3",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Intro></Intro>
      <About />
      <ProductList />
      <Contact></Contact>
    </div>
  );
}

export default App;

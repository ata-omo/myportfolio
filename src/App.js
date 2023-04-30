import logo from './logo.svg';
// import './App.css';
import Intro from './components/introd/Intro';
import About from './components/about/About';
// import Project from './components/projectlist/Project';
import ProjectList from './components/projectlist/ProjectList';
import Contact from './components/contacts/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './Context';


function App() {

  const theme = useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

  return (
    <div className="App" style={{backgroundColor:darkMode ? "rgb(0, 0, 0)" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import About from './components/about';
import Footer from './components/footer';
import './components/home';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
              <li><Link to={'/'}>HOME</Link></li>
              <li><Link to={'/about'}>ABOUT</Link></li>
              <li><Link to={'/skills'}>SKILLS</Link></li>
              <li><Link to={'/projects'}>PROJECTS</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

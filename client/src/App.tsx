// import './App.scss';
import { Route, Routes, useLocation } from "react-router-dom"
import { lazy } from "react";

const Home = lazy(() => import("@pages/home/Home"));
const About = lazy(() => import("@pages/about/About"));
const Portfolio = lazy(() => import("@pages/portfolio/Portfolio"));
const Skills = lazy(() => import("@pages/skills/Skills"));

function App() {
  const location = useLocation();
  return (
    <section>
      <div key={location.pathname} className='route-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
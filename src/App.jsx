import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HudLayout from './components/HudLayout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import About from './pages/About'
import Education from './pages/Education'
import Internship from './pages/Internship'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HudLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import About from './components/About'
import Contact from "./components/Contact"
import Experiences from './components/Experiences'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Projects from './components/Projects'
import Skills from './components/Skills'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <About />
        <Projects />
        <Skills />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
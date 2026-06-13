import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import './App.css'

function App() {
    return (
        <>
            <div className="main">
                <Header />
                <About />
                <Skills />
                <Experiences />
                <Contact />
            </div>
        </>
  )
}

export default App

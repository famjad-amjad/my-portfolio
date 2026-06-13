import { about } from '../portfolio'
import '../styles/About.css'

const About = () => {

  return (
    <section className="about" id="about">
        <p className="section-title">About</p>
        <p className="about-header">{about.header}</p>
        <p className="about-body">{about.body}</p>
    </section>
  )
}

export default About
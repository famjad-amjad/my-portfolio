import { experiences } from '../portfolio'
import '../styles/Experiences.css'

const Experiences = () => {
    if (!experiences || !Array.isArray(experiences) || experiences.length === 0) return null

    return (
        <section className="experiences" id="experiences">
            <p className="section-title">Experiences</p>
            <div className="experience-list">
                {experiences.map((experience, i) => (
                    <div key={i} className="experience-item">
                        <span className="experience-company">{experience.company}</span>
                        <span className="experience-role">{experience.position}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experiences

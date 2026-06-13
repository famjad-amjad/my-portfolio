import { skills } from '../portfolio'
import '../styles/Skills.css'

const Skills = () => {
    if (!skills)
        return null

    return (
        <section className="skills">
            <p className="section-title">Skills</p>
            {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                    {skill}
                </div>
            ))}
        </section>
    )
}

export default Skills
import { header } from '../portfolio'
import '../styles/Header.css'

const Header = () => {

  return (
      <section className="header" id="header">
          <div className="header-homepage">
              <img className="header-banner"
                  src={header.image}
                  alt={`${header.name} profile banner`}
              />
              <div class="overlay-text">inspired by rejection</div>
          </div>
          <div className="header-picture">{header.picture}</div>
          <div className="header-info">
              <div className="header-text">
                  <div className="header-name">{header.name}</div>
                  <div className="header-title">{header.title}</div>
              </div>

              <div className="header-button">
                  <a href="#contact" className="btn">
                      <span className="btn-text">Get in touch</span>
                  </a>
              </div>
          </div>
    </section>
  )
}

export default Header
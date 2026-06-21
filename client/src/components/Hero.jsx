import "../css/hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 text-center text-lg-start">
            <h4 className="text-info mb-3">Hello, I'm</h4>

            <h1 className="hero-title fw-bold">
              Ravi Kumar
            </h1>

            <h2 className="hero-subtitle mt-3 text-info">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Web Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="hero-text mt-4">
              Passionate Full Stack Developer focused on building modern,
              responsive and scalable web applications using JavaScript
              technologies. I enjoy creating clean UI designs and powerful
              backend systems.
            </p>

            <div className="mt-4">
<a
  href="/resume.pdf"
  download="Ravi_Kumar_Resume.pdf"
  className="btn-resume"
>
  Download Resume
</a>
            </div>
          </div>

<div className="col-lg-5 hero-img-wrapper mt-5 mt-lg-0">
  <img
    src="/ravi.jpg"
    alt="Ravi Kumar"
    className="hero-img"
  />
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
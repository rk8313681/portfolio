function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">Who I am and what I do</p>
        </div>

        <div className="row align-items-center">
          
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="About"
              className="img-fluid"
              style={{
                width: "280px",
                borderRadius: "50%",
                border: "5px solid #0dcaf0",
              }}
            />
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold mb-3">
              I am Ravi Kumar, MERN Stack Developer
            </h3>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              I am a passionate web developer with knowledge of HTML, CSS,
              Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB
              and EJS. I enjoy building responsive, user-friendly and dynamic
              web applications.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              I have worked on projects like Educational Tourism & Booking
              System and Timetable Generator, where I implemented features
              such as authentication, admin dashboard, booking request system,
              database management and responsive UI.
            </p>

            <a href="#contact" className="btn btn-info btn-lg mt-3">
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
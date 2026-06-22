function Projects() {
  const projects = [
    {
      title: "Educational Tourism & Booking System",
      desc: "Educational tour booking platform where students can send booking requests for Parliament visits, ISRO tours, industrial visits and educational events. Includes authentication, admin dashboard, booking management and responsive UI.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MongoDB", "EJS"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      github: "https://github.com/rk8313681/Educational-Tourism-System.git",
      live: "https://educational-tourism-system.onrender.com",
    },
    {
      title: "MERN Portfolio Website",
      desc: "Modern responsive portfolio website built for showcasing skills, projects, education and contact information with professional UI design.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/rk8313681/portfolio.git",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">Real projects I have worked on</p>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div className="col-lg-5 col-md-6" key={index}>
              <div
                className="card h-100 border-0 shadow-lg project-card"
                style={{
                  borderRadius: "22px",
                  overflow: "hidden",
                }}
              >
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="project-overlay">
                    <a href={project.github} className="btn btn-light me-2">
                      <i className="fab fa-github me-2"></i>
                      GitHub
                    </a>

                    <a href={project.live} className="btn btn-info">
                      <i className="fas fa-eye me-2"></i>
                      Live
                    </a>
                  </div>
                </div>

                <div className="card-body p-4">
                  <h3 className="fw-bold">{project.title}</h3>

                  <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
                    {project.desc}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.tech.map((item, i) => (
                      <span className="badge bg-dark px-3 py-2" key={i}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
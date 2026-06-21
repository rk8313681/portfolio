function Skills() {

const skills = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    color: "#e34c26",
  },

  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    color: "#264de4",
  },

  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    color: "#7952b3",
  },

  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "#f0db4f",
  },

  {
    name: "React.js",
    icon: "fab fa-react",
    color: "#61dbfb",
  },

  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "#68a063",
  },

  {
    name: "Express.js",
    icon: "fas fa-server",
    color: "#ffffff",
  },

  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "#4db33d",
  },

  {
    name: "EJS",
    icon: "fas fa-code",
    color: "#f7df1e",
  },

  {
    name: "Git & GitHub",
    icon: "fab fa-github",
    color: "#ffffff",
  },
];

  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: "#111827",
        color: "white",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <p className="text-light">
            Technologies I work with
          </p>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-6" key={index}>

              <div
                className="card text-center h-100 border-0"
                style={{
                  background: "#1f2937",
                  color: "white",
                  borderRadius: "20px",
                  transition: "0.3s",
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <div className="card-body py-5">

<>
  <i
    className={skill.icon + " fa-4x mb-4"}
    style={{
      color: skill.color,
    }}
  ></i>

  <h4>{skill.name}</h4>
</>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;

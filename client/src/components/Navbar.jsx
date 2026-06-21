function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-3">
      <div className="container">

<a className="navbar-brand fw-bold fs-3" href="#">
  Ravi Kumar<span className="text-info">.</span>
</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <ul className="navbar-nav ms-auto gap-lg-3">

            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
  <a className="nav-link" href="#education">Education</a>
</li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
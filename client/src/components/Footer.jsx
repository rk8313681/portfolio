function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="d-flex justify-content-center gap-4 mb-3">

  <a
    href="https://github.com/rk8313681"
    target="_blank"
    rel="noreferrer"
    className="text-white"
  >
    <i className="fab fa-github fa-2x"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/ravi-kumar-2b182332a/?isSelfProfile=false"
    target="_blank"
    rel="noreferrer"
    className="text-white"
  >
    <i className="fab fa-linkedin fa-2x"></i>
  </a>

  <a
    href="mailto:rk8313681@gmail.com"
    className="text-white"
  >
    <i className="fas fa-envelope fa-2x"></i>
  </a>

  <a
    href="https://wa.me/919695959664"
    target="_blank"
    rel="noreferrer"
    className="text-white"
  >
    <i className="fab fa-whatsapp fa-2x"></i>
  </a>

</div>
     <p className="mb-0">© {new Date().getFullYear()} Ravi Kumar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
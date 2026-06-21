function Education() {
  return (
    <section id="education" className="py-5" style={{ background: "#111827", color: "white" }}>
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Education</h2>
          <p className="text-light">My academic background</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="card border-0 shadow-lg" style={{ borderRadius: "20px", background: "#1f2937", color: "white" }}>
              <div className="card-body p-4">

<h3 className="fw-bold text-info">Bachelor of Computer Applications (BCA)</h3>

<p className="mb-2">
  <strong>University:</strong> Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal
</p>

<p className="mb-2">
  <strong>Result:</strong> First Division
</p>

<p className="mb-4">
  <strong>CGPA:</strong> 7.18
</p>

<hr className="border-light" />

<h3 className="fw-bold text-info mt-4">Master of Computer Applications (MCA)</h3>

<p className="mb-2">
  <strong>University:</strong> Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal
</p>

<p className="mb-0">
  <strong>Status:</strong> Pursuing, expected completion in July 2026
</p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
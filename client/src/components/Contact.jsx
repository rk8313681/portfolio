import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mk410ek",
        "template_i6ima5l",
        e.target,
        "48QWH2olJYhiyL79m"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
(error) => {
  console.log("FULL ERROR =>", error);
  alert(JSON.stringify(error));
}
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Let’s work together</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="card border-0 shadow-lg" style={{ borderRadius: "20px" }}>
              <div className="card-body p-4">

                <form onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-info btn-lg w-100">
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
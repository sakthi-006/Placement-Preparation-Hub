

function Contact() {
  return (
    <div className="page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
        ></textarea>

        <button>
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;
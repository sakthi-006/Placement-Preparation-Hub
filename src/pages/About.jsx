import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";



function About() {
return ( <div className="about-page">

  <div className="about-hero">

    <div className="about-content">

      <h1>About Placement Hub 🚀</h1>

      <p>
        Placement Hub is an innovative placement
        preparation platform designed to help
        students crack campus placements faster
        and smarter.
      </p>

      <p>
        We provide company-wise preparation,
        aptitude practice, mock tests,
        interview questions, analytics,
        application tracking, and resume-building
        tools to help students become
        industry-ready professionals.
      </p>

      <p>
        Placement Hub is not just a learning
        platform. It is a career transformation
        ecosystem where freshers gain confidence,
        improve their technical skills, and
        achieve their dream jobs.
      </p>

    </div>
    <div className="mission-section">

  <div className="mission-card">
    <h2>🎯 Our Mission</h2>
    <p>
      Empower students with industry-ready
      skills and placement preparation.
    </p>
  </div>

  <div className="mission-card">
    <h2>🚀 Our Vision</h2>
    <p>
      Become India's most trusted placement
      preparation platform.
    </p>
  </div>

</div>
<div className="about-image">

  <img
    src={img1}
    alt="Students Learning"
  />

  <img
    src={img2}
    alt="Students Learning"
  />

</div>

  </div>

  <div className="about-stats">

    <div className="stat-card">
      <h2>5000+</h2>
      <p>Students Trained</p>
    </div>

    <div className="stat-card">
      <h2>1000+</h2>
      <p>Placement Offers</p>
    </div>

    <div className="stat-card">
      <h2>95%</h2>
      <p>Success Rate</p>
    </div>

  </div>

</div>

);
}

export default About;

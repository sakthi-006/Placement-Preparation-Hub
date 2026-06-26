import { useState } from "react";

function ResumeBuilder() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile,setprofile]=useState("")
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [education, setEducation] = useState("");
  const [experience,setexperience]=useState("");
  const {certifications,setcertifications}=useState("");
  const [languages,setlanguages]=useState("")
  return (
    <div className="resume-page">

      <div className="resume-form">

        <h2>Resume Builder</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />
        <textarea
        placeholder="Profile"
        value={profile}
        onChange={(e)=>
        setprofile(e.target.value)}/> 

        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
        />

        <textarea
          placeholder="Projects"
          value={projects}
          onChange={(e) =>
            setProjects(e.target.value)
          }
        />

        <textarea
          placeholder="Education"
          value={education}
          onChange={(e) =>
            setEducation(e.target.value)
          }
        />
        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) =>
            setexperience(e.target.value)
          }
        />
        <textarea 
        placeholder="Certifications"
        value={certifications}
        onchange={(e)=>
          setcertifications(e.target.value)
        }
        />
        <textarea
        placeholder="Languages"
        value={languages}
        onchange={(e)=>
          setlanguages(e.target.value)
        }/>

      </div>

      <div className="resume-preview">

        <h1>{name || "Your Name"}</h1>

        <p>{email}</p>

        <p>{phone}</p>

        <hr />

        <h3>Skills</h3>

        <p>{skills}</p>

        <h3>Projects</h3>

        <p>{projects}</p>

        <h3>Education</h3>

        <p>{education}</p>
        <h3>Profile</h3>
        <p>{profile}</p>
        <h3>Languages</h3>
        <p>{languages}</p>
        <h3>Experrience</h3>
        <p>{experience}</p>
        <h3>Certifications</h3>
        <p>{certifications}</p>

      </div>

    </div>
  );
}

export default ResumeBuilder;
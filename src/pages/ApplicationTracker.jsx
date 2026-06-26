import { useState, useEffect } from "react";
import "../styles/Tracker.css";

function ApplicationTracker() {

  const [applications, setApplications] = useState(() => {

    const saved =
      localStorage.getItem("applications");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

  }, [applications]);

  const addApplication = () => {

    if (
      !company ||
      !role ||
      !status
    )
      return;

    const newApplication = {

      id: Date.now(),

      company,
      role,
      status,
      date,
      notes,
    };

    setApplications([
      ...applications,
      newApplication,
    ]);

    setCompany("");
    setRole("");
    setStatus("");
    setDate("");
    setNotes("");
  };

  const deleteApplication = (id) => {

    const updated =
      applications.filter(
        (app) => app.id !== id
      );

    setApplications(updated);
  };

  const filteredApplications =
    applications.filter((app) =>
      app.company
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="page">

      <h1>
        📌 Application Tracker
      </h1>

      <div className="tracker-form">

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
        />

        <button
          onClick={
            addApplication
          }
        >
          Add Application
        </button>

      </div>

      <input
        type="text"
        placeholder="🔍 Search Company"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="search-box"
      />

      <div className="application-list">

        {filteredApplications.map(
          (app) => (

            <div
              className="application-card"
              key={app.id}
            >

              <h3>
                {app.company}
              </h3>

              <p>
                Role :
                {app.role}
              </p>

              <p>
                Status :
                {app.status}
              </p>

              <p>
                Date :
                {app.date}
              </p>

              <p>
                {app.notes}
              </p>

              <button
                onClick={() =>
                  deleteApplication(
                    app.id
                  )
                }
              >
                Delete
              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default ApplicationTracker;
import { useState, useEffect } from "react";

function MockTestTracker() {

  const [tests, setTests] = useState(() => {
    const saved = localStorage.getItem("tests");
    return saved ? JSON.parse(saved) : [];
  });

  const [testName, setTestName] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "tests",
      JSON.stringify(tests)
    );
  }, [tests]);

  const addTest = () => {

    if (!testName || !score) return;

    const newTest = {
      id: Date.now(),
      testName,
      score,
    };

    setTests([...tests, newTest]);

    setTestName("");
    setScore("");
  };

  const deleteTest = (id) => {

    setTests(
      tests.filter(
        (test) => test.id !== id
      )
    );
  };

  return (
    <div className="page">

      <h1>📝 Mock Test Tracker</h1>

      <div className="tracker-form">

        <input
          type="text"
          placeholder="Test Name"
          value={testName}
          onChange={(e) =>
            setTestName(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) =>
            setScore(e.target.value)
          }
        />

        <button onClick={addTest}>
          Add Test
        </button>

      </div>

      <div className="application-list">

        {tests.map((test) => (

          <div
            className="application-card"
            key={test.id}
          >

            <h3>{test.testName}</h3>

            <p>
              Score :
              {test.score}%
            </p>

            <button
              onClick={() =>
                deleteTest(test.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MockTestTracker;
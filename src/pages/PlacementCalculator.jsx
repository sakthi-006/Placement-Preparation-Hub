import { useState } from "react";

function PlacementCalculator() {

  const [aptitude, setAptitude] = useState("");
  const [coding, setCoding] = useState("");
  const [communication, setCommunication] = useState("");

  const [result, setResult] = useState(0);

  const calculateScore = () => {

    const score =
      (
        Number(aptitude) +
        Number(coding) +
        Number(communication)
      ) / 3;

    setResult(score.toFixed(0));
  };

  return (
    <div className="page">

      <h1>
        📊 Placement Readiness Calculator
      </h1>

      <div className="tracker-form">

        <input
          type="number"
          placeholder="Aptitude %"
          value={aptitude}
          onChange={(e) =>
            setAptitude(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Coding %"
          value={coding}
          onChange={(e) =>
            setCoding(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Communication %"
          value={communication}
          onChange={(e) =>
            setCommunication(e.target.value)
          }
        />

        <button
          onClick={calculateScore}
        >
          Calculate
        </button>

        <h2>
          🚀 Placement Readiness :
          {result}%
        </h2>

      </div>

    </div>
  );
}

export default PlacementCalculator;
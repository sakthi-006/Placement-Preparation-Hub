

function Dashboard() {
  return (
    <div className="page">

      <h1>📊 Placement Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Applications</h3>
          <h1>12</h1>
        </div>

        <div className="dashboard-card">
          <h3>Mock Tests</h3>
          <h1>18</h1>
        </div>

        <div className="dashboard-card">
          <h3>Resume Score</h3>
          <h1>85%</h1>
        </div>

        <div className="dashboard-card">
          <h3>Placement Readiness</h3>
          <h1>78%</h1>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
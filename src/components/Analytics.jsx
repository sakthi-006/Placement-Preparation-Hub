import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Analytics() {

  const data = [
    { name: "Aptitude", score: 85 },
    { name: "Coding", score: 75 },
    { name: "Interview", score: 80 },
    { name: "Mock Test", score: 90 },
  ];

  return (
    <section className="analytics" id="Analytics">

      <h2>Placement Analytics</h2>

      <div className="chart-box">

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="score"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}

export default Analytics;
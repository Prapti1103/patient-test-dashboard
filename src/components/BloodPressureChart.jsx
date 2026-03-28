import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function BloodPressureChart({ data }) {
  if (!data || !data.diagnosis_history) return null;

  // ✅ last 6 months
  const history = data.diagnosis_history.slice(-6);

  // ✅ labels
  const labels = history.map(
    (i) => `${i.month.slice(0, 3)}, ${i.year}`
  );

  // 🔥 FIXED DATA PATH
  const systolic = history.map(
    (i) => i?.blood_pressure?.systolic?.value || 0
  );

  const diastolic = history.map(
    (i) => i?.blood_pressure?.diastolic?.value || 0
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#E66FD2",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#705AAA",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
      }
    ]
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20 }
      }
    }
  };

  return (
    <div className="card chart-card">
      <h3>Diagnosis History</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default BloodPressureChart;
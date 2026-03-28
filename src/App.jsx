import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PatientProfile from "./components/PatientProfile";
import Vitals from "./components/Vitals";
import BloodPressureChart from "./components/BloodPressureChart";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);

        const jessica = data.find(
          (p) => p.name === "Jessica Taylor"
        );

        setSelectedPatient(jessica);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ loading state
  if (!selectedPatient) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="layout">
      {/* ✅ Sidebar gets full patient list */}
      <Sidebar patients={patients} />

      <div className="main">
        <Header />

        <div className="content">
          <div className="center">
            {/* ✅ selected patient data */}
            <BloodPressureChart data={selectedPatient} />
            <Vitals data={selectedPatient} />
          </div>

          <PatientProfile data={selectedPatient} />
        </div>
      </div>
    </div>
  );
}

export default App;
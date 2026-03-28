function Sidebar({ patients }) {
  return (
    <div className="sidebar">
      <h2>Patients</h2>

      {patients.map((p) => (
        <div
          key={p.name}
          className={p.name === "Jessica Taylor" ? "active-patient" : ""}
          style={{ display: "flex", gap: "10px", padding: "10px" }}
        >
          <img src={p.profile_picture} alt={p.name}
  className="patient-img" width="40" />
          <div>
            <strong>{p.name}</strong>
            <p>{p.gender}, {p.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
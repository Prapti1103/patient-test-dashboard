import logo from "../assets/TestLogo.svg";
import doctorImg from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";

function Header() {
  return (
    <div className="header">

      {/* LEFT */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Tech.Care</span>
      </div>

      {/* CENTER */}
      <div className="nav">
        <span>Overview</span>
        <span className="active">Patients</span>
        <span>Schedule</span>
        <span>Message</span>
        <span>Transactions</span>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <img src={doctorImg} alt="doctor" />
        <div>
          <p className="doctor-name">Dr. Jose Simmons</p>
          <p className="doctor-role">General Practitioner</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
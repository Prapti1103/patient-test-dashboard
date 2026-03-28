import femaleIcon from "../assets/FemaleIcon.svg";
import phoneIcon from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";
import birthIcon from "../assets/BirthIcon.svg";
function PatientProfile({ data }) {
  return (
    <div className="right-panel">
      <img src={data.profile_picture} alt="profile" />

      <h2>{data.name}</h2>

      <div className="info-row">
        <img src={birthIcon} alt="DOB" />
        <p>{data.date_of_birth}</p>
      </div>

      <div className="info-row">
        <img src={femaleIcon} alt="Gender" />
        <p>{data.gender}</p>
      </div>

      <div className="info-row">
        <img src={phoneIcon} alt="Phone" />
        <p>{data.phone_number}</p>
      </div>

      <div className="info-row">
        <img src={insuranceIcon} alt="Insurance" />
        <p>{data.insurance_provider}</p>
      </div>

      <button className="btn">Show All Information</button>
    </div>
  );
}

export default PatientProfile;
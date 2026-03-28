import respiratoryIcon from "../assets/respiratory rate.svg";
import temperatureIcon from "../assets/temperature.svg";
import heartIcon from "../assets/HeartBPM.svg";

function Vitals({ data }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="vitals">

      <div className="vital-card blue">
        <img src={respiratoryIcon} alt="resp" />
        <p>Respiratory Rate</p>
        <h2>{data?.respiratory_rate ?? 20} bpm</h2>
      </div>

      <div className="vital-card pink">
        <img src={temperatureIcon} alt="temp" />
        <p>Temperature</p>
        <h2>{data?.temperature ?? 98.6}°F</h2>
      </div>

      <div className="vital-card light-pink">
        <img src={heartIcon} alt="heart" />
        <p>Heart Rate</p>
        <h2>{data?.heart_rate ?? 78} bpm</h2>
      </div>

    </div>
  );
}

export default Vitals;
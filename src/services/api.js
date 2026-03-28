export const fetchPatient = async () => {
  try {
    const res = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        method: "GET",
        headers: {
          "Authorization": "Basic " + btoa("coalition:skills-test"),
          "Content-Type": "application/json"
        }
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log("FULL DATA:", data);

    // Filter Jessica Taylor
    const patient = data.find(p => p.name === "Jessica Taylor");

    console.log("JESSICA:", patient);

    return patient;

  } catch (error) {
    console.error("API ERROR:", error);
  }
};
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { database } from "./firebase";
import { useState, useEffect } from "react";

export default function CareersDetails() {
  const { id } = useParams();
  // const career = useLoaderData();
  // const seriesCollectionRef = collection(database, "careers");
  const careerDocRef = collection(database, "careers");

  const [job, setJob] = useState([]);

  //loader function
  const careerDetailsLoader = async (id) => {
    try {
      const data = await getDocs(careerDocRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      for (const i of filteredData) {
        if (i.id === id) {
          setJob(i);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    careerDetailsLoader(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="career-details">
      <h2 className="text-2xl font-bold">Career Details for {job.title}</h2>
      <p>Starting Salary: ${job.salary}</p>
      <p>Location: {job.location}</p>
      <div className="details">
        <p>Career ID is {job.id}</p>
      </div>
    </div>
  );
}

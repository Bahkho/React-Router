// import { useLoaderData, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { database } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Careers() {
  const [careersList, setCareersList] = useState([]);
  const [error, setError] = useState("");
  const seriesCollectionRef = collection(database, "careers");
  // const careers = useLoaderData();

  const getSeriesList = async () => {
    try {
      const data = await getDocs(seriesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCareersList(filteredData);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getSeriesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="careers">
      <p className="text-red-500 text-2xl">{error}</p>
      {careersList.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

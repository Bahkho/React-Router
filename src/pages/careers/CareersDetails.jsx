import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2 className="text-2xl font-bold">Career Details for {career.title}</h2>
      <p>Starting Salary: ${career.salary.toLocaleString()}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
         Career ID is {id}
        </p>
      </div>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:4000/careers/${id}`);
  if (!response.ok) {
    throw Error("Failed to fetch career details");
  }
  const data = await response.json();
  return data;
};

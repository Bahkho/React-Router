import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("Abdul");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2 className="text-2xl font-bold">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        delectus cumque vitae nemo sit dolore, ipsam saepe dolor corrupti amet
        quos accusantium perferendis excepturi unde ullam magnam voluptates non
        iure?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        delectus cumque vitae nemo sit dolore, ipsam saepe dolor corrupti amet
        quos accusantium perferendis excepturi unde ullam magnam voluptates non
        iure?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        delectus cumque vitae nemo sit dolore, ipsam saepe dolor corrupti amet
        quos accusantium perferendis excepturi unde ullam magnam voluptates non
        iure?
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};
export default About;

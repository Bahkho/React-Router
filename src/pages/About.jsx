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
        With years of experience in the recruitment industry, I have a deep
        understanding of what employers are looking for in candidates.
      </p>
      <p>
        My mission is to empower job seekers like you with the tools, resources,
        and guidance needed to stand out from the competition and land the
        perfect job.
      </p>
      <p>
        Whether you're a recent graduate, a seasoned professional, or someone
        looking to make a career transition, I'm dedicated to providing tailored
        advice and strategies to help you achieve your goals.
      </p>
      <p>
        I believe that finding a job should be a fulfilling and empowering
        process, and I'm committed to making that journey as smooth and
        successful as possible for you.
      </p>
      <p>
        Through personalized coaching, resume optimization, interview
        preparation, and job market insights, I aim to equip you with the skills
        and confidence to excel in your job search.
      </p>
      <p>
        I understand that each individual's career path is unique, and I'm here
        to offer personalized guidance that takes into account your skills,
        interests, and aspirations.
      </p>
      <p>
        Join me on this exciting journey of discovering new opportunities,
        unlocking your potential, and finding the job that aligns with your
        passions and values.
      </p>
      <p>
        Let's work together to turn your job search into a success story!
        Contact me today to get started.
      </p>
      <button onClick={() => setUser(null)} className="my-4">
        Logout
      </button>
    </div>
  );
};
export default About;

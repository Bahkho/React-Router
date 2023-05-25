import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2 className="text-2xl font-bold">Careers</h2>
      <p>
        Welcome to our careers page! We're thrilled that you're considering
        joining our dynamic and innovative team. we believe that our greatest
        asset is our people, and we strive to create an environment where
        individuals can thrive and grow both personally and professionally. Our
        commitment to excellence, collaboration, and continuous learning is what
        sets us apart. If you're passionate about making a meaningful impact,
        embracing new challenges, and being part of a supportive and diverse
        community, then you've come to the right place. Explore the exciting
        opportunities below and embark on an incredible journey with us.
      </p>
      <Outlet />
    </div>
  );
}

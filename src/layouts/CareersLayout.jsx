import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2 className="text-2xl font-bold">Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum nemo
        non vitae iusto in dicta? Velit similique repellendus, unde qui
        assumenda, eaque cumque commodi eligendi, impedit illo suscipit facilis.
      </p>
      <Outlet />
    </div>
  );
}

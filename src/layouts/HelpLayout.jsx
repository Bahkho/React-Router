import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2 className="text-2xl font-bold">Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt,
        minima nam voluptas natus dolores itaque reprehenderit officiis commodi
        at velit, recusandae in quibusdam quis facere. Eligendi voluptate
        assumenda explicabo.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}

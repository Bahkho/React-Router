import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2 className="text-2xl font-bold">Website Help</h2>
      <p>
        Welcome to our help page! We're here to assist you and ensure that your
        experience with our outlet is smooth and enjoyable. Whether you have
        questions, encounter technical issues, or need guidance on how to make
        the most of our services, you've come to the right place.
      </p>
      <p>
        Browse through our helpful resources, frequently asked questions, and
        troubleshooting guides to find the answers you need. If you can't find a
        solution, don't hesitate to reach out to us directly. We're committed to
        resolving your concerns and making your time with us a positive one.
      </p>
      <p>
        Our team of dedicated support agents is ready to provide prompt and
        comprehensive assistance.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

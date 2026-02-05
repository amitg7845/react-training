import { Outlet, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Contact Us</h2>
      <nav className="">
        <button
          onClick={() => navigate("/contact/selectedproduct")}
          className=""
        >
          Product Page
        </button>
        <button onClick={() => navigate("/contact/confirmorder")} className="">
          Confirm Page
        </button>
      </nav>

      {/* Child pages load here */}
      <Outlet />
    </div>
  );
}

export default Contact;

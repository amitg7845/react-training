import { Link, Outlet } from "react-router-dom";

function Home({ people }) {
  const linkStyle = {
    display: "block",
    margin: "10px 0",
    color: "#2980b9",
    fontSize: "20px",
    textDecoration: "none",
  };

  return (
    <>
      <h2>Welcome to the Home Page</h2>
      {people.map((user) => {
        return (
          <Link style={linkStyle} key={user.id} to={`/app/${user.id}`}>
            {user.firstName} {user.lastName}
          </Link>
        );
      })}
      <Outlet />
    </>
  );
}

export default Home;

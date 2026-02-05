import { useParams, useSearchParams } from "react-router-dom";
import "../../App.css";

export default function UserDetails({ people }) {
  const [searchParams, setSearchparams] = useSearchParams();
  console.log("SearchParams", searchParams);

  console.log("searchParams", searchParams.getAll("name"));
  console.log("searchParams", searchParams.getAll("age"));
  console.log("id", searchParams.has("id"));

  const handleParams = () => {
    // To empty search params
    setSearchparams({ name: "Ajit", age: 25 });
  };

  const { userId } = useParams();
  return (
    <div className="user-card-wrp">
      <h2>User Details Page</h2>
      <p>User ID: {userId}</p>
      {people
        .filter((user) => user.id === parseInt(userId))
        .map((user) => (
          <div key={user.id} className="user-card">
            <p>
              Name: {user.firstName} {user.lastName}
            </p>
            <p>Contact No: {user.contactNo}</p>
            <p>Email: {user.email}</p>
            <p>Salary: {user.salary}</p>
            <p>Address: {user.address}</p>
            <p>Date of Birth: {user.dob}</p>
            <p>Age: {user.age}</p>
            <button onClick={handleParams}>Reset</button>
          </div>
        ))}
      <p></p>
    </div>
  );
}

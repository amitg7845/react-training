import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h2>404 - Page Not Found</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

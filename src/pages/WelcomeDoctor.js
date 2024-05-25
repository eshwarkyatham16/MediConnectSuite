import { Link } from "react-router-dom";

export default function WelcomeDoctor() {
  return (
    <div>
      <h3>Welcome Doctor!</h3>
      <Link to="/doctor/1">Health Records</Link>
    </div>
  );
}

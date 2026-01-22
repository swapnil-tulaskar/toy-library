import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => navigate("/toys")}>View Toys</button>
      <br /><br />

      <button onClick={() => navigate("/my-rentals")}>My Rentals</button>
      <br /><br />

      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Dashboard;


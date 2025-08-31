import { useNavigate, useLocation } from "react-router-dom";
import "./ButtonNav.css";

export default function ButtonNav({ iconBTN, nameBTN, path }) {
  const navigate = useNavigate();
  const location = useLocation();

  // check nếu path hiện tại === path của button
  const isActive = location.pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`btnNav ${isActive ? "active" : ""}`}
    >
      {iconBTN}
      <p style={{ paddingLeft: "5px" }}>{nameBTN}</p>
    </button>
  );
}

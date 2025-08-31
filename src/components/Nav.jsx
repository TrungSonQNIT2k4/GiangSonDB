import { useLocation } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import "./Nav.css";
import BungalowIcon from "@mui/icons-material/Bungalow";
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Nav() {
  const location = useLocation(); // lấy path hiện tại

  return (
    <nav className="navBar">
      <img
        src="./assets/GSBG.png"
        alt=""
        style={{ height: "50px", width: "150px" }}
      />
      <p>MENU</p>
      <div className="listBTN">
        <ButtonNav
          iconBTN={<BungalowIcon />}
          nameBTN="Trang chủ"
          path="/home"
          isActive={location.pathname === "/home"}
        />
        <ButtonNav
          iconBTN={<Inventory2Icon />}
          nameBTN="Hàng hóa"
          path="/product"
          isActive={location.pathname === "/product"}
        />
        <ButtonNav
          iconBTN={<LocalShippingIcon />}
          nameBTN="Vận chuyển"
          path="/delivery"
          isActive={location.pathname === "/delivery"}
        />
        <ButtonNav
          iconBTN={<LogoutIcon />}
          nameBTN="Đăng xuất"
          path="/login"
          isActive={location.pathname === "/login"}
        />
      </div>
    </nav>
  );
}

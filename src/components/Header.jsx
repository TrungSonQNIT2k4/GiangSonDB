import React, { useEffect, useState } from "react";
import "./Header.css";
import IconImage from "/assets/GSLOGO.png";
import ButtonInfoDB from "../components/ButtonInfoDB";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header({ pageName }) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      let formattedDate = today.toLocaleDateString("vi-VN", options);
      formattedDate = formattedDate.replace("lúc", "");
      setCurrentDate(formattedDate);
    };
    updateTime();
    const intervalID = setInterval(updateTime, 1000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className="infoDB">
      <div className="dateTime">
        <h2>{pageName}</h2>
        <p style={{ color: "grey", fontWeight: "600" }}>{currentDate}</p>
      </div>
      <div className="navInfo">
        <ButtonInfoDB iconIFDB={<SearchIcon />} />
        <ButtonInfoDB iconIFDB={<NotificationsNoneIcon />} />
        <ButtonInfoDB
          iconIFDB={
            <img
              src={IconImage}
              style={{ height: "50%", width: "80%" }}
              alt="User Logo"
            />
          }
        />
        <div className="infoPerson">
          <h2>Trung Sơn</h2>
          <p style={{ margin: "0" }}>Nhân viên</p>
        </div>
      </div>
    </div>
  );
}

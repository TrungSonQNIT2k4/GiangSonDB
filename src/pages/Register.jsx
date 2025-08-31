import { useState } from "react";
import { useNavigate, Link, Navigate, useLocation } from "react-router-dom";
import "./Login.css";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passcheck, setPassCheck] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault(); // Ngăn form tải lại trang

    if (username.length < 8 || password < 8) {
      alert("Tên tài khoản hoặc mật khẩu không đủ 8 ký tự");
      setUsername("");
      setPassword("");
      setPassCheck("");
    } else if (password != passcheck) {
      alert("Mật khẩu xác nhận không đúng");
      setPassword("");
      setPassCheck("");
    } else {
      navigate("/home");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const layoutVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const location = useLocation();

  return (
    <div className="loginDB">
      <title>Đăng ký</title>
      <AnimatePresence mode="wait">
        <Motion.div
          key={location.pathname}
          variants={layoutVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img src="/assets/GSBG.png" alt="" className="logoDB" />
          <div className="form-login" style={{ height: "80%" }}>
            <p style={{ fontWeight: "600", fontSize: "30px" }}>Đăng ký</p>
            <form className="login-input" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Tạo tài khoản mới"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Tạo mật khẩu mới"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Xác nhận mật khẩu"
                required
                value={passcheck}
                onChange={(e) => setPassCheck(e.target.value)}
              />
              <div className="checkPass">
                <p>Xem mật khẩu</p>
                <input type="checkbox" onClick={togglePasswordVisibility} />
              </div>
              <button className="btn btn-login" type="submit">
                Đăng ký
              </button>
            </form>
            <p>Nếu bạn đã có tài khoản</p>
            <p>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#4452f5" }}
              >
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </Motion.div>
      </AnimatePresence>
    </div>
  );
}

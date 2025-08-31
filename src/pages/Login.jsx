import "./Login.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn form tải lại trang

    if (username === "trungson" && password === "123456") {
      navigate("/home"); // Đăng nhập thành công, chuyển hướng
    } else {
      alert("Tên tài khoản hoặc mật khẩu không đúng!");
      // Sai thì không cần load lại trang mà chỉ cần xóa dữ liệu form
      setUsername("");
      setPassword("");
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
          <title>Đăng nhập</title>
          <img src="/assets/GSBG.png" alt="" className="logoDB" />
          <div className="form-login">
            <p style={{ fontWeight: "600", fontSize: "30px" }}>Đăng nhập</p>
            <form className="login-input" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Nhập tên tài khoản"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="checkPass">
                <p>Xem mật khẩu</p>
                <input type="checkbox" onClick={togglePasswordVisibility} />
              </div>
              <button className="btn btn-login" type="submit">
                Đăng nhập
              </button>
            </form>
            <p>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#4452f5" }}
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </Motion.div>
      </AnimatePresence>
    </div>
  );
}

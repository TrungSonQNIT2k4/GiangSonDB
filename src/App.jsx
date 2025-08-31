import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Container from "./components/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Delivery from "./components/Delivery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
      </Route>
    </Routes>
  );
}

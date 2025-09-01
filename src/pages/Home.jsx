import "./Home.css";
import "./ContainerMain.css";
import CarDB from "../components/CardDB";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="containerMain">
      <div className="homeDB">
        <Header pageName="Trang chủ" />
        <CarDB content={"SƠ ĐỒ"} />
        <CarDB content={"THU NHẬP"} />
        <CarDB content={"LỢI NHUẬN"} />
        <CarDB content={"SỐ HÀNG"} />
      </div>
    </div>
  );
}

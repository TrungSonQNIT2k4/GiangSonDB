import "./Delivery.css";
import "./ContainerMain.css";
import CarDB from "../components/CardDB";
import Header from "../components/Header";

export default function Delivery() {
  return (
    <div className="containerMain">
      <div className="homeDB">
        <Header pageName="Vận chuyển" />
        <CarDB content={"SƠ ĐỒ"} />
        <CarDB content={"THU NHẬP"} />
        <CarDB content={"LỢI NHUẬN"} />
        <CarDB content={"SỐ HÀNG"} />
      </div>
    </div>
  );
}

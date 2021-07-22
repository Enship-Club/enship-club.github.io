import Banner from "../components/Banner";
import StayTuned from "../components/StayTuned";
import MainEvents from "../components/MainEvents";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Banner />
      {/* <StayTuned /> */}
      <MainEvents />
    </div>
  );
}

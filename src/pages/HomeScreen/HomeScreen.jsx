import { useState } from "react";
import Nav from "../../components/nav/Nav";
import "./HomeScreen.scss";
import Banner from "../../components/banner/Banner";

function HomeScreen() {
  const [search, setSearch] = useState("");
  return (
    <div className="HomeScreen">
      <Nav search={search} setSearch={setSearch} />
      <Banner />
    </div>
  );
}

export default HomeScreen;

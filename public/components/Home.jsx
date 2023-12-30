import react from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};
export default Home;

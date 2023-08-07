import React from "react";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import Tab from "../Tab/Tab";
import Aboutus from "../Aboutus/Aboutus";
import Client from "../Client/Client";
import useTitle from "../../../hooks/useTitle";
import Download from "../Download/Download";

const Home = () => {
  useTitle("Toy car zone | Home");
  return (
    <>
      <Hero></Hero>
      <Gallery></Gallery>
      <Tab></Tab>
      <Aboutus></Aboutus>
      <Client></Client>
      <Download></Download>
    </>
  );
};

export default Home;

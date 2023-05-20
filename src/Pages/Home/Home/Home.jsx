import React from "react";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import Tab from "../Tab/Tab";
import Aboutus from "../Aboutus/Aboutus";
import Client from "../Client/Client";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Toy car | Home");
  return (
    <>
      <Hero></Hero>
      <Gallery></Gallery>
      <Tab></Tab>
      <Aboutus></Aboutus>
      <Client></Client>
    </>
  );
};

export default Home;

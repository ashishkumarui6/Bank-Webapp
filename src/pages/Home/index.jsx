import React, { useState } from "react";
import Layout from "../../ui/layout";
import AsideMenu from "../../helper/AsideMenu";
import UserDass from "../../components/UserDass";
import Notification from "../../components/Notification";

const Home = () => {
  const [aside, setAside] = useState(false);

  const toggle = () => {
    setAside(!aside);
  };

  return (
    <>
      <Layout toggle={toggle}>
        Home
        {aside && <AsideMenu toggle={toggle} />}
        <UserDass />
        <Notification />
      </Layout>
    </>
  );
};

export default Home;

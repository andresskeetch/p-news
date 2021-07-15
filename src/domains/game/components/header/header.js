import React from "react";
import Head from "next/head";

const Header = ({ name }) => {
  return (
    <Head>
      <title>Planning Stories Game {name} </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Header;

// import { discover } from "npm-git-install";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import React from "react";
import Sidebar from "./containers/Sidebar/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
      </Main>
      <Footer />
    </>
  );
}

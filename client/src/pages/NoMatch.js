import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

function NoMatch() {
  return (
    <div>
      <Nav />
      <Header />
      <center><h1>404 PAGE NOT FOUND</h1>
        <h4>Return to main page to search for another book!</h4>
        </center>
    </div>
  );
}

export default NoMatch;

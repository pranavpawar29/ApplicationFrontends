import Header from "./components/Header/Header.jsx";
import { Fragment, useState } from "react";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/TabButton/Examples.jsx";

export default function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}


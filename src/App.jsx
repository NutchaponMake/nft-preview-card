import { useState } from "react";
import "./App.css";
import { Card } from "./ui/Card/Card";
import { NftImage } from "./components/NftImage/NftImage";
import { NftDescription } from "./components/NftDescription/NftDescription";
import { NftPrice } from "./components/NftPrice/NftPrice";
import { NftCreator } from "./components/NftCreator/NftCreator";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Card>
        <NftImage />
        <NftDescription />
        <NftPrice />
        <hr />
        <NftCreator />
      </Card>
      <Footer />
    </>
  );
}

export default App;

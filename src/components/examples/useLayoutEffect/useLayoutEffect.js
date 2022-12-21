import { Box } from "@mui/material";
import React, { useState, useLayoutEffect } from "react";
import SideMenu from "../../common/SideMenu";
import Navbar from "../../Header/Navbar";

const UseLayoutEffectExample = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useLayoutEffect(() => {
    if (randomNumber === 0) {
      setRandomNumber(Math.random() * 1000);
    }
  }, [randomNumber]);

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <p>{randomNumber}</p>
          <button onClick={() => setRandomNumber(0)}>Change value</button>
        </Box>
      </Box>
    </>
  );
};

export default UseLayoutEffectExample;

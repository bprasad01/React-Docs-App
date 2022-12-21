import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ClickCounter from "../examples/ClickCounter";
import HoverCounter from "../examples/HoverCounter";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const HOC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            Higher Order Component
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            Why Higher Order Component?
          </Typography>
          <Typography variant="p" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            To Share Common Functionality Between Components
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            What is Higher Order Component?
          </Typography>
          <Typography variant="p" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            A Pattern where a function takes a component as an argument and returns a new component
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "2%", marginLeft: "5%" }}>
           For Examples
          </Typography>
          <ClickCounter />
          <HoverCounter />
        </Box>
      </Box>
    </>
  );
};

export default HOC;

import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const PureComponent = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            PureComponent
          </Typography>
          <Typography variant="p" sx={{ marginTop: "10%", lineHeight : "45px", color: "#2a9d8f" }}>
          We can create a component by extending the PureComponent class.
            <br />
          A PureComponent implements the shouldComponentUpdate lifecycle method by performing a
          shallow comparison on the props and state of the component.
          <br />
          If there is no difference, the component is not re-rendered ~ performance boost.
          <br />
          It is a good idea to ensure that all the children components are also pure to avoid unexpected
          behaviour.
          <br />
          Never mutate the state. Always return a new object that reflects the new state.

          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PureComponent;

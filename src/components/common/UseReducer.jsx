import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const UseReducer = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            useReducer Hook
          </Typography>
          <Typography variant="p" sx={{ marginTop: "10%", color: "#2a9d8f" }}>
          useReducer is a react hook that allows you to manage the state of components basically it is a alternative of useState. They both create a new state and updated.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            For Example
          </Typography>
          <Link to={"/hooks/example"}>See Here</Link>
        </Box>
      </Box>
    </>
  );
};

export default UseReducer;

import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const UseImperetiveHandle = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            UseImperetiveHandle
          </Typography>

          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "20px", lineHeight: "2px", color: "#2a9d8f" }}
            >
              In React, data is passed from parent to child components via
              props, in what is known as unidirectional data flow. The parent
              component cannot directly call a function defined in the child
              component or reach down to grab a value for itself.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "30%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              In certain circumstances, we want our parent component to reach
              down to the child component, getting data that originates in the
              child component for its own use. We can achieve this type of data
              flow with the useImperativeHandle Hook, which allows us to expose
              a value, state, or function inside a child component to the parent
              component through ref. You can also decide which properties the
              parent component can access, thereby maintaining the private
              scoping of the child component.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              useImperativeHandle(ref, createHandle, [dependencies]) <br />
              1. ref: The ref passed down from the parent component <br />
              2. createHandle: The value to be exposed to the parent component{" "}
              <br />
              3. dependencies: An array of values that cause the Hook to rerun
              when changed
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
              Use Case
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              When you need a bidirectional data and logic flow, but you don’t
              want to overcomplicate things by introducing state management
              libraries, the useImperativeHandle Hook is a great choice.
            </Typography>
          </Box>
        <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "5%" }}>
            For Example
          </Typography>
        <Link to={"/hooks/useImperetive/example"}>See Here</Link>
        </Box>
      </Box>
    </>
  );
};

export default UseImperetiveHandle;

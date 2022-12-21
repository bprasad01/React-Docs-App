import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const UseLayoutEffect = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            UseLayoutEffect
          </Typography>

          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "20px", lineHeight: "2px", color: "#2a9d8f" }}
            >
              Like the useEffect Hook, the useLayoutEffect Hook lets you perform
              side effects like API calls, setting up subscriptions, and
              manually manipulating the DOM in a function component.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "30%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              Although React fires both useEffect and useLayoutEffect after
              performing the DOM updates, useLayoutEffect is called before the
              browser paints those updates for users to see, synchronously,
              while useEffect is called after the browser paints those updates,
              asynchronously
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "30%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              Therefore, the browser cannot paint any browser updates until
              useLayoutEffect runs. For this reason, you’ll mostly use
              useEffect, which shows your users something like a loader in the
              browser while the side effects are being run.{" "}
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "30%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              However, there are a few situations where we want to run the side
              effect and update the DOM before showing our users the updates. We
              can do so using useLayoutEffect with the following syntax.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              useLayoutEffect(callback, [dependencies]) <br />
              1. callback: The function that contains the side effect logic{" "}
              <br />
              2. dependencies: An array of dependencies. The callback function
              is run again when the value of any of the dependencies change
              <br />
            </Typography>
          </Box>
         
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            For Example
          </Typography>
          <Link to={"/hooks/useLayoutEffect/example"}>See Here</Link>
        </Box>
      </Box>
    </>
  );
};

export default UseLayoutEffect;

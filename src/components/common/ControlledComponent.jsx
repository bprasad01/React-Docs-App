import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";

const ControlledComponent = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            Controlled & UnControlled Component
          </Typography>
          <Box sx={{ marginTop: "2%" }}>
            <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
              Controlled Component
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              A controlled component is bound to a value, and its changes will
              be handled in code by using event-based callbacks. Here, the input
              form element is handled by the react itself rather than the DOM.
              In this, the mutable state is kept in the state property and will
              be updated only with setState() method.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "20px", lineHeight: "2px", color: "#2a9d8f" }}
            >
              Controlled components have functions that govern the data passing
              into them on every onChange event occurs. This data is then saved
              to state and updated with setState() method. It makes component
              have better control over the form elements and data.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
              Uncontrolled Component
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "2px", color: "#2a9d8f" }}
            >
              Uncontrolled components are those for which the form data is
              handled by the DOM itself. “Uncontrolled” refers to the fact that
              these components are not controlled by React state.{" "}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "20px", lineHeight: "2px", color: "#2a9d8f" }}
            >
              The values of the form elements are traditionally controlled by
              and stored on the DOM. We will have to refer to the instance of
              the form elements to retrieve their values from the DOM.
            </Typography>
            <br />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ControlledComponent;

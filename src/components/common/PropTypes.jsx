import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";
import InstaImg4 from "../../assets/images/Proptypes.png";
import Example from "../../assets/images/Example.png";
const PropTypes = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            PropTypes
          </Typography>

          <Box sx={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ marginTop: "20px", lineHeight: "2px", color: "#2a9d8f" }}
            >
              PropTypes are simply a mechanism that ensures that the passed
              value is of the correct datatype. This makes sure that we don’t
              receive an error at the very end of our app by the console which
              might not be easy to deal with.
            </Typography>
            <br />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
              Basic Types of PropTypes
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              The most basic way we can check a prop's type is by checking if it
              falls under the category of primitive types in JavaScript, such as
              a boolean, string, object, and so on.
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              Below is the list of all data types that are considered primitive
              or the basic ones with their classes that we can use to check
              props.{" "}
            </Typography>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={InstaImg4}
            />
            <br />
            <Typography
              variant="p"
              sx={{ marginTop: "10%", lineHeight: "45px", color: "#2a9d8f" }}
            >
              Below is an example that shows us how to use these PropTypes for
              type checking in our app. As we discussed already, they are
              defined as objects with a key and a value pair where the key is
              the name of the object while value contains the classes which will
              be used for type checking.
            </Typography>
            <br />
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={Example}
            />
          </Box>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            In detail Read Here :-
          </Typography>
          <a
            href={
              "https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/"
            }
            target="blank"
          >
            See Here
          </a>
        </Box>
      </Box>
    </>
  );
};

export default PropTypes;

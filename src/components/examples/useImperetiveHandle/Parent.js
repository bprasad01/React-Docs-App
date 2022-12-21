import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import SideMenu from "../../common/SideMenu";
import Navbar from "../../Header/Navbar";
import ChildComponent from "./Child";

const ParentComponent = () => {
  const [ open, setOpen ] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</button>
          <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Confirm</button>
          <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Deny</button>
          <ChildComponent ref={modalRef} isOpen={open} onClose={() => setOpen(false)}/>
        </Box>
      </Box>
    </>
  );
};

export default ParentComponent;

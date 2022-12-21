import React from "react";
import styled from "styled-components";
import { sideBarData } from '../utils/sideBarItems'
import SubMenu from "./SubMenu";

const SidebarWrap = styled.div`
  width: 20%;
`;

const SideMenu = () => {
  return (
    <>
      <SidebarWrap>
        {sideBarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </>
  );
};

export default SideMenu;

import React from "react";

import Navbar from "../Navbar";
import SubNavbar from "../SubNavbar";

import {
  HeaderContainer,
} from "./styles";

interface Props {};

export default function Header(props: Props): JSX.Element {
  return(
    <HeaderContainer>
      <Navbar />
      <SubNavbar />
    </HeaderContainer>
  );
};
import React from 'react';

import Nav1 from "./Nav/Nav1";
import Nav2 from "./Nav/Nav2";

import * as Styled from './Nav__Styled';

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsNav = {};

function Nav({}: PropsNav) {
  return (
  
    <Styled.Div__Nav>
      <Nav1/>
      <Nav2/>
    </Styled.Div__Nav>
    
  );
}

export default Nav;



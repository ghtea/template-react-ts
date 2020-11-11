import React from 'react';


import styled, {ThemeProvider }  from 'styled-components';

import { themeLight, themeDark } from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';


import Nav from "./components/Nav";
import Content from "./components/Content";

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsApp = {};

function App({}: PropsApp) {
  return (
    
    <ThemeProvider theme={themeLight}>
    
      <GlobalStyle />
      
      <Nav/>
      <Content/>
  
    </ThemeProvider>
    
  );
}

export default App;



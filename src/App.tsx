import React, {useEffect, useState, useMemo} from 'react';
import { useHistory, useLocation } from "react-router-dom";

import styled, {ThemeProvider }  from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';
import * as actionsAuth from 'store/actions/auth';

import { Theme, themeLight } from "./styles/theme";
import GlobalStyle from 'styles/GlobalStyle';
import 'styles/importFonts.css';

import Nav from "./components/Nav";
import Content from "./components/Content";
import FullPage from "./components/FullPage";
import Modal from "./components/Modal";
import Notification from "./components/Notification";

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsApp = {};

function App({}: PropsApp) {
  
  let location = useLocation();
  const dispatch = useDispatch();
  
  
  
  const [isFullPage, setIsFullPage] = useState(false);
  const listFullPage : string[] = [
    '/log-in', '/sign-up', '/lost'
  ];
  useEffect(() => {
    
    const listMatched: RegExpMatchArray | null = (location.pathname).match( /\/[^\/]+/ );
    let pathFirst: string = '/';
    if (listMatched !== null){
      pathFirst = listMatched[0];
    }
    //console.log(listMatched)
    //console.log(pathFirst)
    
    if (listFullPage.includes(pathFirst)){
      setIsFullPage(true);
    }
    else {
      setIsFullPage(false);
    }
    
  }, [location]);
  
  
  
  // read languge from result of i18Next detector
  useEffect(() => {
    dispatch(actionsStatus.return__READ_LANGUAGE() );
  }, []);
  
  
  
  const nameThemeCurrent:string = useSelector((state: StateRoot) => state['status']['current']['theme']['name']);
  
  useEffect(() => {
    dispatch(actionsStatus.return__READ_OPTION_THEME() );
  }, []);
  
  const themeCurrent:Theme = useMemo(
    () => {
      if (nameThemeCurrent === 'dark') {
        console.log('dark theme')
        return themeLight;
      }
      else {
        return themeLight;
      }
    },[nameThemeCurrent]
  );
  
  
  // log check
  useEffect(() => {
    dispatch(actionsAuth.return__LOG_CHECK() );
  }, []);
  
  
  
  return (
    
    <ThemeProvider 
      theme={ themeCurrent }
    >
    
      <GlobalStyle />
      
      <Notification />
      <Modal />
      
      {isFullPage && <FullPage/>}
      
      {!isFullPage && 
        <>
          <Nav/>
          <Content/>
        </>
      }
      
    </ThemeProvider>
    
  );
}

export default App;



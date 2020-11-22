import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconLogIn from 'svgs/basic/IconLogIn';

import * as Styled from './LogIn_Styled';


type PropsLogIn = {};

function LogIn({}: PropsLogIn) {
  
  const history = useHistory();
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  return (
    <Styled.Div__LogIn>
    
      <Styled.Div__LogIn_TitlePage> Log In </Styled.Div__LogIn_TitlePage>
        
        <Styled.Div__LogIn_Identity> 
          <input 
            type='text'
            placeholder='Email Address'  
          /> 
          <div> Email Address </div>
        </Styled.Div__LogIn_Identity>
        
        <Styled.Div__LogIn_Password> 
          <input 
            type='password'
            placeholder='Password'
          /> 
          <div> Password </div>
        </Styled.Div__LogIn_Password> 
        
        <div> message </div>
        
        <Styled.Div__LogIn_Enter> 
          <button> Log In </button>
        </Styled.Div__LogIn_Enter> 
        
      
        <div> 
          <div> or Log In with </div>
        </div> 
        
        <Styled.Div__LogIn_Social> 
          <button> Google </button>
          <button> Facebook </button>
          <button> Twitter </button>
        </Styled.Div__LogIn_Social> 
        
        <Styled.Div__LogIn_CollectionLink> 
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/')}
            > Home </a> 
          </div>
          <div> <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/sign-up')}
          > Sign Up </a> </div>
        </Styled.Div__LogIn_CollectionLink>
        
        
    </Styled.Div__LogIn>
  );
}

LogIn.defaultProps = {};

export default LogIn;

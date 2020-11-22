import styled from 'styled-components';

export const Div__LogIn = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  width: ${({theme})=>theme.size.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 20px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;




export const Div__LogIn_TitlePage = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: 50px;
  font-size: 1.6rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;


export const Div__LogIn_Input = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: flex-start;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: auto;
  
  border-radius: 0px;
  
  position: static;
  
  & > *:nth-child(n+2){
    margin-top: px;
  }
  
  
  
  & > div:nth-child(1) {
    
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: flex-start;
  
    font-size: 1rem;
    color: ${ ({theme})=>theme.color.Content.label___font };  
    
    height: 24px;
  }
  
  
  & > div:nth-child(2) {
    height: 40px;
    margin-top: 2px;
    & > input {
      width: 100%;
      height: 100%;
    }
  }
  
  & > div:nth-child(3) {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
  
    height: 22px;
  }
`;



export const Div__LogIn_Identity = styled(Div__LogIn_Input)
`
  
`


export const Div__LogIn_Password = styled(Div__LogIn_Input)
`
  
`



export const Div__LogIn_CollectionLink = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-end; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%; min-width: 100%; max-width: 100%;
  height: 40px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div {
    width: auto;
  }
  
  & > * {
    margin-left: 10px;
    & > a {
      font-size: 1.1rem;
    }
  }
`;



export const Div__LogIn_Enter = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;

  background-color: ${ ({theme})=>theme.color.GlobalStyle.button_main___bg };
  color: ${ ({theme})=>theme.color.GlobalStyle.button_main___font };
  
  width: 100%;
  height: 44px;
  
  font-weight: normal;
  border-radius: 4px;
  
  position: static;
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div {
    font-size: 1.2rem;
  }
  
`;


export const Div__LogIn_Social = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;

  width: auto;
  height: auto;
  
  font-weight: normal;
  
  
  position: static;
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > button {
    font-size: 1rem;
    
    color: ${ ({theme})=>theme.color.GlobalStyle.button_main___font };
    border-radius: 4px;
    
    width: 100px;
    height: 44px;
    
    &:nth-child(n+2){
      margin-left: 20px;
    }
    
    &:nth-child(1){
      background-color: ${ ({theme})=>theme.color.Share.button_google___bg };
    }
    &:nth-child(2){
      background-color: ${ ({theme})=>theme.color.Share.button_facebook___bg };
    }
    &:nth-child(3){
      background-color: ${ ({theme})=>theme.color.Share.button_twitter___bg };
    }
  }
  
`;
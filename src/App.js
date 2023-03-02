import React, { useContext } from 'react';
import { ThemeContext} from './contexto/ThemeContext';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './App.css';
import Button from './components/button/Button';

import Router from './routes';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div className={theme}>
      <GlobalStyle />
       <Router />
       <DivButton>
       <Button onClick={toggleTheme} name="Alternar tema"></Button>
       </DivButton>
       
    </div>
     
  );
}

const GlobalStyle = createGlobalStyle`
 * {
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;0,600;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap');
   padding:0;
   margin:0;
   font-family: 'Roboto', sans-serif;
   box-sizing:border-box;
   text-decoration:none;
   color:#efe6e6;
 }
 
`
const DivButton = styled.div`
    padding:30px;
`
export default App;

import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    html , body , #root{
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    background: linear-gradient(-45deg,#48d1cc, #00ced1,#20b2aa, #008b8b) no-repeat;
    background-size: 300% 300%;

    animation: gradient 7s ease infinite 2s;
   
    @keyframes gradient{
       0%{
        background-position: 0% 25%;
       }
      
       25%{
        background-position: 25% 50%;
       }
       50%{
        background-position: 50% 75%;
       }
       
       75%{
        background-position: 75% 100%;
    } 
       100%{
        background-position:  100% 0%;
       }
    }

   }
  
   
`;
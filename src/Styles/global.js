import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    html , body , #root{
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    background: #48d1cc ;//linear-gradient(-45deg,#48d1cc,#20b2aa, #00ced1, #008b8b);
    animation: trans 10s linear infinite 3s;
   
    @keyframes trans{
       0%{
        background: #48d1cc;
       }
      
       20%{
        background: #00ced1;
       }
       40%{
        background: #20b2aa;
       }
       
       60%{
        background: #008b8b;
    } 
       80%{
        background:  #006b6b;
       }

       100%{
         background: #48d1cc;
       }
    }

   }
  
   
`;
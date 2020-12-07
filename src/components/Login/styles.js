import styled from 'styled-components';
export const Container = styled.div` 
    
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`;
export const Content = styled.div`
    height: 60vh;
    min-width: 40vw; 
    margin: 3% auto;
    align-items: center;
    flex-direction: column;

`;
export const ImgLogin = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: none;
    align-items: center;
    box-shadow: rgba(0,0,0,0.2) 1px 1px 15px 10px;
    img{
        width: 50%;
        height: 50%;
    }
`;
export const FormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    input{
        margin: 5% 0;
        width: 100%;
        padding: 5% 0;
        border-radius: 50px;
        border: none;
        border-top: solid 0.3rem  #008b8b;
        background: #2eb7b2;
        transition: background 0.3s;
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: 0.1rem;
       
        &::placeholder{
            color: #fff;
            font-size: 1.5rem;
            text-align: center;
            letter-spacing: 0.1rem;

        }
        &:focus{
           outline: none;
           background: #008b8b;
        }
    }
  
`;
export const RelembreMeAndForgotPassword = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    input{
       display: none;
    }
    input:checked + label:after{
        background: #008b8b;
       
    }
    label{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 45%;
        position: relative;
        p{
            margin-left: 2%;
            color: #fff;
            font-size: 1.1rem;
            font-family: Arial, Helvetica, sans-serif;
        }
        &:before{
            //position: absolute;
            content: ' ';
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #fff;
           
        }
        &:after{
            position: absolute;
            content: ' ';
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: none;
            left: 2.40px;
           
        }
    }

    a{
        text-decoration: none;
        font-size: 1.1rem;
        font-family: Arial, Helvetica, sans-serif;
    }

`;
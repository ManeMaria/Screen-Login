import styled from 'styled-components';

export const Container = styled.button`
        margin: 5% 0;
        width: 100%;
        padding: 3% 0;
        border-radius: 50px;
        border: none;
        font-size: 2rem;
        letter-spacing: 0.3rem;
        color:  #008080;
        box-shadow: rgba(0,0,0,0.1) 1px 1px 15px 10px;
        transition: all 0.3s;

        &:focus{
            outline: none;
            background: #008080;
            color: #fff;

        }
        &:hover{
            cursor: pointer;
            border-top: 3px solid #008080;
            border-right: 3px solid #008080;
            border-left: 3px solid #008080;
        }
`;

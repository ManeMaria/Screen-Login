import React from 'react';
import ButtonLogin from '../Button/index';
 import { Container, Content, FormLogin, ImgLogin, RelembreMeAndForgotPassword } from './styles';

function Todo() {
   
  return (
      <Container>
        <Content>
          <ImgLogin>
          <img 
            src="https://img.icons8.com/dotty/80/000000/camera.png" 
            alt='login'
          />
          </ImgLogin>
          <FormLogin>
            <input type='text' placeholder='Username' />
            <span/>
            <input type='password' placeholder='Password' />
          </FormLogin>
          
          <RelembreMeAndForgotPassword>
          
            <input type='checkbox'  id='relember' value='Relember me'/>
            <label htmlFor='relember'>
                <p>
                  Relember me
                </p>
            </label>
            
            <a href='https://github.com/ManeMaria'>
              <p> 
                Forgot Password?
              </p>
            </a>
          </RelembreMeAndForgotPassword>
          <ButtonLogin >
            Login
          </ButtonLogin>

        </Content>
      </Container>

  );
}

export default Todo;
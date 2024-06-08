import React from 'react';
import styled from 'styled-components';
import LoginImage from "../assets/login-image.png";
import { LogoLogin } from '../components/icons/logo-login';

const Container = styled.div`
    display: flex;
`

const ImageContainer = styled.div`
    position: relative;
    padding-inline: 25px;
    height: 100%;
    background: var(--linear-gradient-y-invert);
`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 150px 100px 150px;

    svg {
        margin-bottom: 50px
    }

    button {
        background: var(--linear-gradient);
        padding: 20px 55px;
        border-radius: 60px;
        border: none;
        margin-bottom: 20px;

        color: #FFF;
        font-size: 32px;
        font-weight: 400;
    }

    p {
        font-size: 24px;
        font-weight: 400;
        color: #000;

        a {
            color: var(--primary-color);
        }
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;
    width: 100%;
    margin-bottom: 60px;

    div {
        display: flex;
        justify-content: space-between;
        gap: 35px;
    }

    input {
        border: none;
        height: 44px;
        border-bottom: 1px solid var(--primary-color);
        font-size: 20px;
        font-weight: 500;
        color: #000;
    }

    input::placeholder {
        color: #000;
        position: absolute;
        top: 0px;
        left: 0px;
    }
`

const Login = () => {
  return (
    <Container>
        <ImageContainer>
            <img src={LoginImage}/>
        </ImageContainer>
        <FormContainer>
            <LogoLogin/>
            <Form>
                <div>
                    <input type="text" placeholder='Nome'/>
                    <input type="text" placeholder='Sobrenome'/>
                </div>
                <input type="text" placeholder='E-mail'/>
                <div>
                    <input type="text" placeholder='Senha'/>
                    <input type="text" placeholder='Confirmar senha'/>
                </div>
            </Form>
            <button>Registre-se</button>
            <p>Ja é de casa? <a href="">Faça o Login</a></p>
        </FormContainer>
    </Container>
  )
}

export default Login;
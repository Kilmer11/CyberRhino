import React from 'react';
import styled from 'styled-components';
import LoginImage from "../assets/login-image.png";
import { LogoLogin } from '../components/icons/logo-login';

const Container = styled.div`
    display: flex;
    height: 100vh;

    @media(max-width: 778px) {
        background: var(--linear-gradient);
        padding: 50px 40px;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    background: var(--linear-gradient-y-invert);

    img {
        max-width: 700px;
        width: 100%;
        height: 90%;

        @media(max-width: 850px) {
            width: 80%;
            height: 70%;
        }
    }

    @media (max-width: 778px) {
        display: none;
    }
`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0 100px 0;
    background: #FFF;

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

    @media(max-width: 778px) {
        border-radius: 18px;    

        p {
            font-size: 18px;
        }

        button {
            padding: 16px 30px;
            font-size: 24px;
        }
    }
`

const Form = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    margin-bottom: 78px;

    div {
        width: 100%;
        display: flex;
        gap: 35px;
    }

    input {
        width: 100%;
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

    @media(max-width: 778px) {
        div:nth-of-type(2) {
            flex-direction: column;
            gap: 50px;
        }

        input {
            font-size: 16px;
        }

        width: 80%;
        gap: 50px;
        margin-bottom: 40px;
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
import React from 'react';
import styled from 'styled-components';
import ContatoImage from "../assets/contato-image.png";
import { Whatsapp } from './icons/whatsapp';
import { LocalIcon } from './icons/local-icon';
import { EmailIcon } from './icons/email-icon';
import { P } from "./topography/P";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 250px 145px 200px 145px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 100%;

    h1 {
        color: #000;
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    
    h3 {
        font-weight: 500;
        font-size: 24px;
        color: #000;
        line-height: 1;
    }

    div {
        display: flex;
        align-items: center;
        gap: 18px;
        justify-content: center;
    }

    .local {
        margin-bottom: 20px;
    }

    button {
        margin-top: 65px;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        gap: 35px;
        padding: 26px 55px;
        color: #FFF;
        font-size: 30px;
        font-weight: 400;
        border: none;
        border-radius: 70px;
    }
`

const Contato = () => {
  return (
    <Container>
        <Content>
            <P>Contate-nos</P>
            <h1>Entre em contato</h1>
            <div className='local'> 
                <LocalIcon/>
                <h3>R. Francisco Carlos Daniel, 157</h3>
            </div>
            <div>
                <EmailIcon/>
                <h3>cyberrhino@gmail.com</h3>
            </div>
            <button>Contate-nos <Whatsapp/></button>
        </Content>
        <img src={ContatoImage}/>
    </Container>
  )
}

export default Contato;
import React from 'react';
import styled from 'styled-components';
import LogoFooter from "../assets/logo-footer.png";
import { Whatsapp } from './icons/whatsapp';
import { Insta } from './icons/insta';
import { Github } from './icons/github';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--linear-gradient);
    padding: 120px 65px;

    div {
        p {
            font-weight: 400;
            font-size: 16px;
            color: #FFF;
        }
    }
`

const Social = styled.div`
    display: flex;
    gap: 70px;
`

const Footer = () => {
  return (
    <Container>
        <div>
            <img src={LogoFooter}/>
            <p>©2022 - ChyberRhino</p>
            <p>Todos os direitos reservados</p>
        </div>
        <Social>
            <Whatsapp/>
            <Insta/>
            <Github/>
        </Social>
    </Container>
  )
}

export default Footer;
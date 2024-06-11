import React from 'react';
import styled from 'styled-components';
import { CloseButton } from './icons/closeButton';
import { LogoWhite } from './icons/logo-white';
import { Github } from './icons/github';
import { Insta } from './icons/insta';
import { Whatsapp } from './icons/whatsapp';

const Container = styled.div`
    background: var(--linear-gradient);
    padding-top: 30px;
    height: 100vh;
    width: 100%;
    max-width: 778px;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    animation: open 500ms;

    @keyframes open {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px 90px 20px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    margin-bottom: 90px;

    button {
        background: transparent;
        border: none;
        font-size: 22px;
        font-weight: 800;
        color: #FFF;
        cursor: pointer;
    }

    .contato {
        background: #FFF;
        padding: 15px 35px;
        border-radius: 95px;
        color: var(--primary-color);
    }
`
    
const Social = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    justify-content: center;
`

const PageButton = ({handleIsOpen}) => {
  return (
    <Container>
        <nav>
            <LogoWhite/>
            <div onClick={handleIsOpen}>
                <CloseButton/>
            </div>
        </nav>
            <Buttons>
                <button>Início</button>
                <button>Serviços</button>
                <button>Quem somos?</button>
                <button className='contato'>Contate-nos</button>
            </Buttons>
            <Social>
                <Whatsapp/>
                <Insta/>
                <Github/>
            </Social>
    </Container>
  )
}

export default PageButton;
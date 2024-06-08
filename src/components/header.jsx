import React from 'react';
import styled from 'styled-components';
import { WhatsappBlue } from './icons/whatsapp-blue';
import Desenho from "../assets/desenho.png";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 85px 55px 55px 85px;
    margin: 0 40px;
    background: var(--linear-gradient);
    border-radius: 18px 18px 300px 18px;
    margin-bottom: 100px;

    img {
        position: absolute;
        top: 120px;
        right: 70px;
    }
`

const Infos = styled.div`
    div:nth-of-type(1) {
        max-width: 600px;
        margin-bottom: 12px;
    }

    div:nth-of-type(2) {
        width: 443px;
        margin-bottom: 55px;

        p {
            color: #FFF;
            font-size: 32px;
            font-weight: 400;
        }
    }

    div:nth-of-type(3) {
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 35px;
        
        button {
            background: #FFF;
            padding: 18px 22px;
            border-radius: 40px;
            color: var(--primary-color);
            border: none;
            font-size: 20px;
            font-weight: 500;
        }

        button:nth-of-type(2) {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }
`

const P = styled.p`
    font-weight: 800;
    font-size: 48px;
    color: #FFF;
    line-height: 1;
`

const Header = () => {
  return (
    <Container>
        <Infos>
            <div>
                <P>Bem vindo(a) a família Cyber Rhino!</P>
            </div>
            <div>
                <p>Aqui procuramos reservar e 
                    entregar o melhor serviço 
                    para você.
                </p>
            </div>
            <div>
                <button>Quem somos?</button>
                <button>Contate-nos <WhatsappBlue/></button>
            </div>
        </Infos>
        <img src={Desenho} />
    </Container>
  )
}

export default Header;
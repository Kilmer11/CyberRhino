import React from 'react';
import styled from 'styled-components';
import { WhatsappBlue } from './icons/whatsapp-blue';
import Desenho from "../assets/desenho.png";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 85px 0px 55px 85px;
    margin: 0 40px 100px 40px;
    background: var(--linear-gradient);
    border-radius: 18px 18px 300px 18px;
    
    img {
        position: absolute;
        top: 120px;
        right: 80px;
    }

    @media(max-width: 778px) {
        flex-direction: column;
        align-items: center;
        padding-inline: 0px;
        border-radius: 40px 40px 250px 40px;

        img {
            display: flex;
            justify-content: center;
            position: relative;
            width: 100%;
            top: 0;
            left: 0;
        }
    }

    @media(max-width: 1200px) {
        border-radius: 20px 20px 200px 20px;
        gap: 20px;

        img {
            width: 380px;
        }
    }

    @media(max-width: 940px) {
        img {
            display: flex;
            justify-content: center;
            align-items: start;
            width: 340px;
            position: relative;
            top: 0;
            right: 0;
        }
    }
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    max-width: 745px;

    div:nth-of-type(1) {
        margin-bottom: 12px;

        p {
            font-weight: 800;
            font-size: 48px;
            color: #FFF;
            line-height: 1;
        }
    }

    div:nth-of-type(2) {
        width: 75%;
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
            display: flex;
            justify-content: center;
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

    @media(max-width: 778px) {
        width: 80%;
        text-align: center;

        div:nth-of-type(1) {
            p {
                font-size: 34px
            }
        }

        div:nth-of-type(2) {
            width: 100%;
            margin-bottom: 30px;

            p {
                font-size: 22px;
            }
        }

        div:nth-of-type(3) {
            flex-direction: column;
            gap: 15px;

            button {
                font-size: 16px;
                width: 50%;
                min-width: 230px;
            }
        }
    }

    @media(max-width: 1200px) {
        div:nth-of-type(1) {
            p {
                font-size: 40px;
            }
        }

        div:nth-of-type(2) {
            margin-bottom: 30px;

            p {
                font-size: 18px;
            }
        }

        div:nth-of-type(3) {
            justify-content: flex-start;

            button {
                font-size: 14px;
                height: 50px;
            }
        }
    }
`

const Header = () => {
  return (
    <Container>
        <Infos>
            <div>
                <p>Bem vindo(a) a família Cyber Rhino!</p>
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
        <div className='Img'>
            <img src={Desenho} />
        </div>
    </Container>
  )
}

export default Header;
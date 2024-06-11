import React from 'react';
import styled from 'styled-components';
import ContatoImage from "../assets/contato-image.png";
import { Whatsapp } from './icons/whatsapp';
import { LocalIcon } from './icons/local-icon';
import { EmailIcon } from './icons/email-icon';
import { P } from "./topography/P";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 180px;
    padding: 150px 50px;

    .button2 {
        display: none;
    }

    @media(max-width: 778px) {
        flex-direction: column;
        padding: 100px 40px;
        align-items: center;
        gap: 34px;

        .button1 {
            display: none;
        }
        
        .button2 {
            font-size: 20px;
            padding: 16px 40px;
            display: flex;
            margin-top: 0;
        }

        p {
            font-size: 16px;
        }
            
        div {
            align-items: center;
            text-align: center;

            h1 {
                font-size: 34px;
                margin-bottom: 30px;
            }

            .local {
                margin: 0;
            }

            div {
                svg {
                    width: 30px;
                }

                h3 {
                    font-size: 18px;
                }
            }
        }
    }

    @media(max-width: 1220px) {
        gap: 50px;

        img {
            width: 400px;
            height: 282px;
        }

        div {
            .local {
                margin-bottom: 10px;
            }

            h1 {
                margin-bottom: 20px;
                font-size: 36px;
            }

            button {
                margin-top: 30px;
                font-size: 24px
            }

            div {
                svg {
                    width: 44px;
                }

                h3 {
                    font-size: 20px;
                }
            }
        }
    }
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
        line-height: 1;
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
`

const Button = styled.button`
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
            <Button className="button1">Contate-nos <Whatsapp/></Button>
        </Content>
        <img src={ContatoImage}/>
        <Button className="button2">Contate-nos <Whatsapp/></Button>
    </Container>
  )
}

export default Contato;
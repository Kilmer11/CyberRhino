import React from 'react';
import styled from 'styled-components';
import Images from "../assets/images-group.png";
import AskImage from "../assets/quemSomos-image.png";
import { P } from "./topography/P";
import { H1 } from './topography/H1';

const Container = styled.div`
    width: 100%;
    background: var(--quem-somos-bg);

    img {
        width: 100%;
    }

    @media(max-width: 778px) {
        .Images {
            display: none;
        }

        .ask {
            width: 60%;
            margin: 0;
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 260px 40px 160px;
    
    img {
        width: 345px;
        margin-bottom: 70px;
    }

    @media(max-width: 778px) {
        flex-direction: column-reverse;
        padding: 100px 0 40px 0;
    }

    @media(max-width: 1200px) {
        padding-inline: 50px;
    }

    @media(max-width: 1200px) {
        img {
            width: 300px;
        }

        div {
            h1 {
                font-size: 34px;
            }

            h3 {
                font-size: 18px;
            }
        }
    }
`

const Content = styled.div`
    width: 540px;

    p {
        margin-bottom: 5px;
    }

    h1 {
        line-height: 1;
        margin-bottom: 10px;
    }
    
    h3 {
        color: var(--text-gray);
        font-size: 22px;
        font-weight: 500;
        line-height: 1;
    }

    @media(max-width: 778px) {
        text-align: center;
        width: 90%;

        p {
            font-size: 16px;
        }

        h1 {
            margin-bottom: 35px;
            font-size: 32px;
        }

        h3 {
            font-size: 18px;
        }
    }
`

const QuemSomos = () => {
  return (
    <Container>
        <img className='Images' src={Images}/>
        <ContentContainer>
            <img className="ask" src={AskImage}/>
            <Content>
                <P>Quem somos?</P>
                <H1>Entenda porque existimos</H1>
                <h3>
                    Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical
                    literature.
                </h3>
            </Content>
        </ContentContainer>
    </Container>
  )
}

export default QuemSomos;
import React from 'react';
import styled from 'styled-components';
import Hardware from "../assets/hardware-image.png";
import Software from "../assets/software-image.png";
import Design from "../assets/design-image.png";
import { ConfereIcon } from './icons/confere-icon';
import { ServicesButton } from './services-button';
import { Link } from "react-router-dom";

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 50px;

   @media(max-width: 778px) {
    flex-direction: column;
   }

   @media(max-width: 1440px) {
    gap: 25px;
    
    p {
      font-size: 16px;
    }
   }

   @media(max-width: 1000px) {
    max-width: 350px;
    
    div {
      .img {
          width: 200px;
        }

        p {
          font-size: 14px;
           width: 100%;
        }
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 27px 45px 27px;
  backgorund: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;

  img {
    margin-bottom: 20px;
  }

  .design {
    width: 345px;
  }

  .link {
    text-decoration: none;
    width: 90%;
  }

  @media(max-width: 1440px) {
    padding: 20px 20px 40px 20px;

    .img {
      width: 260px;
    }
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`

const Description = styled.p`
  width: 270px;
  text-align: center;
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 32px;
`

const Card = () => {
  return (
    <Container>
        <CardContainer>
          <img className="img" src={Hardware}/>
          <Title>
            <h2>Hardware</h2>
            <ConfereIcon/>
          </Title>
          <Description>
            Aqui você irá conferir opções para o seu eprendedorismo alavancar e seguir as atuais
            tendêcias do mercado da área de técnologia, estamos contigo para proporcionar o melhor 
            serviço na área de hardware que você precisar: - Manutenção - Formatação
          </Description>
          <Link to="/services/hardware" className='link'>
            <ServicesButton/>
          </Link>
        </CardContainer>


        <CardContainer>
          <img className='design img' src={Design}/>
          <Title>
            <h2>Design</h2>
            <ConfereIcon/>
          </Title>
          <Description>
            Aqui você irá conferir opções para o seu eprendedorismo alavancar e seguir as atuais
            tendêcias do mercado da área de técnologia, estamos contigo para proporcionar o melhor 
            serviço na área de hardware que você precisar: - Manutenção - Formatação
          </Description>
          <Link to="/services/design" className='link'>
            <ServicesButton/>
          </Link>
        </CardContainer>


        <CardContainer>
          <img className="img" src={Software}/>
          <Title>
            <h2>Software</h2>
            <ConfereIcon/>
          </Title>
          <Description>
            Aqui você irá conferir opções para o seu eprendedorismo alavancar e seguir as atuais
            tendêcias do mercado da área de técnologia, estamos contigo para proporcionar o melhor 
            serviço na área de hardware que você precisar: - Manutenção - Formatação
          </Description>
          <Link to="/services/software" className='link'>
            <ServicesButton/>
          </Link>
        </CardContainer>
    </Container>
  )
}

export default Card;
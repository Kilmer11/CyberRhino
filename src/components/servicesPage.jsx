import React from 'react';
import styled from 'styled-components';
import NavBarServices from './navBarServices';
import Footer from './footer';
import { Pbold } from './topography/P';
import Manutenção from "../assets/manutenção-image.png"
import Formatação from "../assets/formatação-image.png"
import FrontEnd from "../assets/frontEnd-image.png"
import BackEnd from "../assets/backEnd-image.png"
import Marketing from "../assets/marketing-image.png"
import WebDesign from "../assets/webDesign-image.png"
import { ServicesButton } from './services-button';
import { FrontEndIcons } from './icons/frontEnd-icons';
import { BackEndIcon } from './icons/backEnd-icons';

const Container = styled.div`
`

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 250px 150px 250px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    color: #000;
    line-height: 1;
  }

  .description {
    margin-top: 40px;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
  }
`

const ServicesCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 0 150px;
  margin-bottom: 200px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleService = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 50px;
  background: var(--linear-gradient-y);
  border-radius: 8px;
  gap: 10px;

  h1 {
    color: #FFF;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
  }
`

const ContainerCard = styled.div`
  width: 430px;
  min-height: 900px;
  border: 1px solid var(--border-color);
  border-radius: 0 0 5px 5px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .description2 {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    line-height: 1.2;
    text-align: center;
  }

  a {
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
    text-decoration: underline;
  }

  div {
    text-align: center;

    button {
      margin-bottom: 20px;
    }

    svg {
      margin-block: 40px;
    }
  }
`

const ServicesPage = ({
    title,
    askOption,
    description,
    image1,
    image2,
    service1,
    tecnologias1,
    descriptionService1,
    service2,
    tecnologias2,
    descriptionService2,
    type
}) => {
  return (
    <Container>
      <NavBarServices/>
      <Text>
        <h1>{title}</h1>
        <Pbold>{askOption}</Pbold>
        <p className='description'>{description}</p>
      </Text>
      <ServicesCard>
        <Card>
          <img src={image1 === "manutenção" && Manutenção
                ||  image1 === "frontend" && FrontEnd
                ||  image1 === "webdesign" && WebDesign
          }/>
          <TitleService>
            <h1>{service1}</h1>
            <p>{tecnologias1}</p>
          </TitleService>
          <ContainerCard>
            <p className='description2'>{descriptionService1}</p>
            <div>
              {type === 'software' && <FrontEndIcons/>}
              <ServicesButton/>
              <a>Especifique seu serviço aqui.</a>
            </div>
          </ContainerCard>
        </Card>


        <Card>
          <img src={image2 === "formatação" && Formatação
                ||  image2 === "backend" && BackEnd
                ||  image2 === "marketing" && Marketing
          }/>
          <TitleService>
            <h1>{service2}</h1>
            <p>{tecnologias2}</p>
          </TitleService>
          <ContainerCard>
            <p className='description2'>{descriptionService2}</p>
            <div>
              {type === 'software' && <BackEndIcon/>}
              <ServicesButton/>
              <a>Especifique seu serviço aqui.</a>
            </div>
          </ContainerCard>
        </Card>
      </ServicesCard>
      <Footer/>
    </Container>
  )
}

export default ServicesPage;
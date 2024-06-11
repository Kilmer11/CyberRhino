import React from 'react';
import styled from 'styled-components';
import Card from './card-services';
import { P } from "./topography/P";
import { H1 } from './topography/H1';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 85px;
    margin-bottom: 150px;
    text-align: center;

    h1 {
        margin-bottom: 45px;
        line-height: 1.2;
    }

    @media(max-width: 778px) {
      margin-bottom: 100px;

      p {
        font-size: 16px;
      }

      h1 {
        font-size: 32px;
      }
    } 
`

const Services = () => {
  return (
    <Container>
        <P>Serviços</P>
        <H1>O que podemos oferecer?</H1>
        <div>
          <Card/>
        </div>
    </Container>
  )
}

export default Services;
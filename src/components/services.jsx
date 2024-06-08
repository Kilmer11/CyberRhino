import React from 'react';
import styled from 'styled-components';
import Card from './card-services';
import { P } from "./topography/P";
import { H1 } from './topography/H1';
// import { useQuery } from 'react-query';
// import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 85px;
    margin-bottom: 245px;

    h1 {
        margin-bottom: 45px;
    }
`

const Services = () => {
    // const api = 'http://localhost:8080/items';

    // const { data, error } = useQuery("items", () => {
    //   return axios.get(api).then((response) => response.data);
    // })


    // console.log(data);
    // if(error) {
    //     console.log(error)
    // }

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
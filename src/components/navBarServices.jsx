import React from 'react';
import styled from 'styled-components';
import { BackButton } from './icons/backButton';
import { Logo } from './icons/logo';
import { Pbold } from './topography/P';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 25px 0 0 40px;
`

const NavBarServices = () => {
  

  return (
    <Container>
        <BackButton/>
        <Logo/>
        <Pbold>
            - Serviços    
        </Pbold>        
    </Container>
  )
}

export default NavBarServices;
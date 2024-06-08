import React from 'react';
import styled from "styled-components";
import { Logo } from "./icons/logo"


const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 340px 25px 60px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 72px;

    button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-color);
    }
    
    .contato {
        border: 1px solid var(--primary-color);
        padding: 10px 20px;
        border-radius: 34px;
    }

    .contato:hover {
        background-color: var(--primary-color);
        color: #FFF;
    }
`

const Navbar = () => {
  return (
    <NavbarContainer>
        <Logo/>
        <Buttons>
            <button>Início</button>
            <button>Serviços</button>
            <button>Quem somos?</button>
            <button className='contato'>Contate-nos</button>
        </Buttons>
    </NavbarContainer>
  )
}

export default Navbar;
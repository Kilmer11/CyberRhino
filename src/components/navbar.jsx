import React, { useState } from 'react';
import styled from "styled-components";
import { Logo } from "./icons/logo"
import { NavbarButton } from './icons/buttonNavbar';
import PageButton from './pageButton';
import { CloseButton } from './icons/closeButton';


const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 340px 25px 60px;

    .button {
        display: none;
    }

    @media(max-width: 778px) {
        .button {
            display: flex;
        }
        
        padding-right: 60px;
    }

    
    @media(max-width: 1200px) {
        padding-right: 25px;
        
        .buttons {
            gap: 50px;
        }
    }
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

    @media(max-width: 778px) {
        display: none;
    }
`

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(prevEvent => !prevEvent);
    }

  return (
    <NavbarContainer>
        <Logo/>
        <Buttons className='buttons'>
            <button>Início</button>
            <button>Serviços</button>
            <button>Quem somos?</button>
            <button className='contato'>Contate-nos</button>
        </Buttons>
        <div className='button' onClick={handleIsOpen}>
            <NavbarButton/>
        </div>
        {isOpen && <PageButton handleIsOpen={handleIsOpen}/>}
    </NavbarContainer>
  )
}

export default Navbar;
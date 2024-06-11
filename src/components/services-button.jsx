import styled from "styled-components";
import Basket from "../assets/basket.png";

const ServicesButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 24px;
    background: var(--linear-gradient);
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    color: #FFF;
    width: 100%;
    cursor: pointer;
    gap: 20px;

    p {
        font-size: 18px;
    }

    .basket {
        margin: 0;
    }

    @media(max-width: 1440px) {
        p {
            font-size: 14px;
        }

        gap: 10px;

        .basket {
            width: 35px;
        }
    }
`

export function ServicesButton() {
    return (
        <ServicesButtonContainer>
            <p>solicitar serviço</p> 
            <img className="basket" src={Basket}/>
        </ServicesButtonContainer>
    )
}
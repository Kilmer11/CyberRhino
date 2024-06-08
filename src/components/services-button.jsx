import styled from "styled-components";
import Basket from "../assets/basket.png";

const ServicesButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding: 15px 24px;
    background: var(--linear-gradient);
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    color: #FFF;
    width: 310px;
    cursor: pointer;

    .img {
        margin: 0;
    }
`

export function ServicesButton() {
    return (
        <ServicesButtonContainer>
            <p>solicitar serviço</p> 
            <img className="img" src={Basket}/>
        </ServicesButtonContainer>
    )
}
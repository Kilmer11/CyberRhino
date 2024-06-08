import React from 'react';
import ServicesPage from '../components/servicesPage';

const Hardware = () => {
  return (
        <ServicesPage
            title="Hardware"
            askOption="PROBLEMAS COM SEU APARELHO?"
            description="Hardware é a parte física do computador, ou seja, o conjunto de 
            aparatos eletrônicos, peças e equipamentos que fazem o computador funcionar. 
            A palavra hardware pode se referir também como o conjunto de equipamentos acoplados
            em produtos que precisam de algum tipo de processamento computacional. A ciência 
            que estuda o hardware é conhecida como arquitetura de computadores. Diferentemente
            do hardware, o software é a parte lógica do computador. Software é a manipulação, 
            instrução de execução, redirecionamento e execução das atividades lógicas das máquinas."
            image1={"manutenção"}
            image2={"formatação"}
            service1="Manutenção"
            tecnologias1="html, css, typescript, javascript."
            descriptionService1="A manutenção adequada de um hardware é tão importante quanto a de
            um software. Ela é caracterizada por limpeza, identificação de falhas e suas origens,
            diagnóstico de peças que não estão mais desempenhando como o desejado e, em alguns casos,
            substituição de componentes. O ideal é que seja feita uma manutenção regularmente; assim é
            possível evitar desgastes, inclusive dos elementos vitais para o bom funcionamento da máquina.
            Basicamente existem dois tipos de manutenções de hardware: preventiva e corretiva. A primeira
            consiste na análise prévia do computador, de seu funcionamento, relacionada à CPU e a todos os periféricos."
            service2="Formatação"
            tecnologias2="Spring tool suite, java, python."
            descriptionService2="Uma das principais atividades realizadas por quem atua com manutenção de PCs e Notebooks
            é sem dúvidas a formatação de computadores. A demanda por esse tipo de tarefa é muito grande pois mesmo sendo
            um procedimento relativamente simples, a maioria das pessoas não se sente segura e confortável para fazer por
            conta própria e preferem pagar um profissional capacitado. Para os profissionais é importante conhecer bem os
            passos corretos para realizar a tarefa de maneira eficiente e ágil, de forma que o cliente fique satisfeito com o resultado.
            Formatamos Windows, Linux e Mac."
            type="hardware"
        />
  )
}

export default Hardware;
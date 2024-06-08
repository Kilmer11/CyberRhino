import React from 'react';
import ServicesPage from '../components/servicesPage';

const Software = () => {
  return (
    <ServicesPage
            title="Software"
            askOption="PORQUE FAZER UM SITE?"
            description="Software é um conjunto de instruções que devem ser seguidas e executadas por um mecanismo, seja
            ele um computador ou um aparato eletromecânico. É o termo usado para descrever programas, apps, scripts, macros
            e instruções de código embarcado diretamente (firmware), de modo a ditar o que uma máquina deve fazer. Todo programa
            em seu computador, celular, tablet, smart TV, console de videogame, set-top box e etc. é um software, seja ele um editor
            de textos, um navegador, um editor de áudio ou vídeo, um jogo, um app de streaming e por aí vai."
            image1={"frontend"}
            image2={"backend"}
            service1="Front-end"
            tecnologias1="html, css, typescript, javascript."
            descriptionService1="Podemos classificá-lo como a parte que nos permite interagir. Quem trabalha com front-end é responsável
            por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da web, como HTML, CSS e JavaScript.
            Algumas pessoas podem confundir esse trabalho com o que um designer faz, mas a diferença aqui é que o designer vai utilizar alguma
            ferramenta visual para desenhar a interface, como Photoshop ou Sketch. Já quem faz front-end estará mais próxima do código em si, que
            irá rodar no navegador, como o Chrome, Firefox ou Safari."
            service2="Back-end"
            tecnologias2="Spring tool suite, java, python."
            descriptionService2=" Quando acessamos um site, por exemplo, por trás de toda sua apresentação amigável esteticamente, há uma
            comunicação das informações trocadas entre banco de dados e navegador. Portanto, por trás da interface gráfica do realizador,
            o back-end está sempre agindo. As vertentes da programação podem se enveredar por diferentes caminhos. Ou seja, um software developer
            pode trabalhar na área de front-end ou back-end. Quando seu domínio atinge os dois lados, sua denominação passa a ser Full Stack."
            type="software"
        />
  )
}

export default Software;
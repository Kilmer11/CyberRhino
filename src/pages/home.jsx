import React from 'react';
import Header from '../components/header';
import Services from '../components/services';
import QuemSomos from '../components/quemSomos';
import Contato from '../components/contato';

const Home = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <QuemSomos/>
        <Contato/>
    </div>
  )
}

export default Home;
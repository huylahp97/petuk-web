import React from 'react';

import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header/Header'
import Programs from './components/Programs/Programs';
import Benefits from './components/Benefits/Benefits';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';


const App: React.FC = (): JSX.Element => {
  return (
    <GlobalStyles>
      <div className="App">
        <Header/>
        <Programs />
        <Benefits />
        <Menu />
        <Testimonials />
        <Footer />
      </div>
    </GlobalStyles>
  );
}

export default App;

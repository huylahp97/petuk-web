import React from 'react';
import Header from './components/Header/Header'
import GlobalStyles from './components/GlobalStyles';

const App: React.FC = (): JSX.Element => {
  return (
    <GlobalStyles>
      <div className="App">
        <Header/>
      </div>
    </GlobalStyles>
  );
}

export default App;

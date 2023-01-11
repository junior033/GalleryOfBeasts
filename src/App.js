// import dependencies

import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// Class component

class App extends React.Component{
  render(){
    return (
      <> 
        <Header />
        <Main />
        <Footer />
      </>

    )
  }

}



// export component

export default App;
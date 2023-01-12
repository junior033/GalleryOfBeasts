// import dependencies
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SelectedBeast from './components/SelectedBeast/SelectedBeast';
import data from './data/data.json';
// Class component

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selected: {},
      data: data
    }
  }

  handleOpenModal = (obj) =>{
    const selected = data.find((beast)=>beast.title === obj)
    this.setState({
      showModal: true,
      selected
    })
  }

  handleCloseModal = () => {
    console.log('here');
    this.setState({
      showModal: false,
    })
  }

  render(){
    return (
      <> 
        <Header />
        <Main handleOpenModal={this.handleOpenModal} show={this.state.showModal} data={this.state.data}/>
            <SelectedBeast
            onHide={this.handleCloseModal}
            show={this.state.showModal}
            selected={this.state.selected}
            />
        <Footer />
      </>

    )
  }

}



// export component

export default App;
import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import './Main.css'

class Main extends React.Component{
  render(){
    return(
      <>
        <main>
          {this.props.data.map((beast) => {
            return(
            <HornedBeast 
            title={beast.title} 
            src={beast.image_url} 
            discription={beast.description} 
            key={beast._id}
            open={this.props.show}
            handleOpenModal={this.props.handleOpenModal}
            />
          )})}
        </main>
      </>
    )
  }
}

export default Main;
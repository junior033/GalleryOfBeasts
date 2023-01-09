import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
      <>
        <h2>Beast {this.props.name}</h2>
        <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;
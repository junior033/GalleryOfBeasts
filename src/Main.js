import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return(
      <>
        <HornedBeast name='Marlon' src='https://www.shutterstock.com/image-vector/drawing-ghatola-monster-characters-beast-260nw-2123794487.jpg' alt='Marlon Beast' title='Marlon Beast' description='This is a Safari Beast' />
        <HornedBeast name='Jessop' src='https://bloody-disgusting.com/wp-content/uploads/2022/12/beasts-2.png' alt='Jessop Beast' title='Jessop Beast' description='This is a Jungle Beast' />
      </>
    )
  }
}

export default Main;
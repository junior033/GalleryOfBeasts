import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import data from '../../data/data.json';
import './Main.css'

class Main extends React.Component{
  render(){
    return(
      <>
        <main>
          {data.map((beast) => {
            return <HornedBeast name={beast.title} src={beast.image_url} discription={beast.description} key={beast._id}/>
          })}
        </main>
      </>
    )
  }
}

export default Main;
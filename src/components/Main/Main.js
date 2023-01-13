import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import './Main.css'
import { Form, FormSelect, FormGroup } from 'react-bootstrap';
import data from '../../data/data.json';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      beastData: data,
    }
  }

  handleSelect = (event) =>{
    let numOfHorns = parseInt(event.target.value);
    let newData = this.state.beastData;
    if(numOfHorns){
      newData = data.filter(num => num.horns === numOfHorns)
    }
    this.setState({
      beastData: newData,
    })
  }
  render(){
    return(
      <>
        <Form>
            <FormGroup>
              <FormSelect name ='selected' onChange={this.handleSelect}>
                <option> Open this menu</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
              </FormSelect>
            </FormGroup>
          </Form>
        <main>
          {this.state.beastData.map((beast) => {
            return(
            <HornedBeast 
            title={beast.title} 
            src={beast.image_url} 
            discription={beast.description} 
            key={beast._id}
            open={this.props.show}
            horns={beast.horns}
            handleOpenModal={this.props.handleOpenModal}
            />
          )})}
        </main>
      </>
    )
  }
}

export default Main;
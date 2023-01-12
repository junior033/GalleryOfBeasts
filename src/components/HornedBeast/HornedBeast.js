import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
      helpMe: false,
    }
  }

  handleClick = () => {
    this.props.handleOpenModal(this.props.title);
    this.setState({
      hearts: this.state.hearts + 1
    })
  }


  render() {
    return (
      <>
        <Card onClick={this.handleClick}>
          <article>
          <h2>{this.props.title}</h2>
          <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
          <h3>{this.state.hearts}</h3>
          <p>❤️</p>
          <p>{this.props.description}</p>
          <div></div>
          </article>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
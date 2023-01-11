import React from 'react';
import Button from 'react-bootstrap/Button';
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
    this.setState({
      hearts: this.state.hearts + 1
    })
  }

  needHelp = () => {
    this.setState({
      helpMe: true
    })
  };

  gotHelp = () => {
    this.setState({
      helpMe: false
    });
  }

  render() {
    return (
      <>
        <Card>
          <article>
          <h2>{this.props.name}</h2>
          <img src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <h3>{this.state.hearts}</h3>
          <p onClick={this.handleClick}>❤️</p>
          <p>{this.props.description}</p>
          <Button onClick={this.needHelp}>Help</Button>
          <Button onClick={this.gotHelp}>Got Help</Button>
          <div>{this.state.helpMe ? 'I need Help' : ''}</div>
          </article>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
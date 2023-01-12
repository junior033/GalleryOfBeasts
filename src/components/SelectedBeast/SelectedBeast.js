import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component{
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton><h2>{this.props.selected.title}</h2></Modal.Header>
          <img src={this.props.selected.image_url} alt={this.props.selected.description} title={this.props.selected.title} />
          <p>{this.props.selected.description}</p>
      </Modal>
    )
  }
}

export default SelectedBeast;
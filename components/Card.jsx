import React, { Component } from 'react'
import Modal from 'react-modal'

const little = {
  width: '30em',
  height: '20em',
  backgroundColor: '#000000',
  borderRadius: '1em',
  border: '3px solid #4C4C4C',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}

const calc = {
  width: '16em',
  height: '16em',
  borderRadius: '0.5em'
}

const custom = {
  content : {
  	width: '32em',
  	height: '20em',
    top  : '50%',
    left : '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: '2px solid black',
    fontFamily: 'Roboto',
    fontSize: '22px'
  }
}

const close = {
	fontFamily: 'Roboto',
	fontSize: '15px',
	float: 'right'
}

export default class Card extends Component {
	constructor(props){
		super()
	  this.state = {
	  	isActive: false
	  }
	}

	componentWillMount(){
		Modal.setAppElement('body')
	}

	toggleModal(){
	  this.setState({
	  	isActive: !this.state.isActive
	  })
	}
  render() {
    return (
      <div style={little} onClick={this.toggleModal.bind(this)} >
      	<img style={calc} src={this.props.animation} />
	      <Modal style={custom} isOpen={this.state.isActive} onRequestClose={this.toggleModal.bind(this)}>
	      	<button style={close} onClick={this.toggleModal.bind(this)}>X</button>
	      	{this.props.content}
	      </Modal>
      </div>
    )
  }
}

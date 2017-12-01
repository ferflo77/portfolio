import React, { Component } from 'react'
import Card from './Card'
import CalculatorAnimation from '../gifs/calculator.gif'
import ChatAnimation from '../gifs/chat.gif'
import MemoryAnimation from '../gifs/memory.gif'
import HouseAnimation from '../gifs/house.gif'
import YoutubeAnimation from '../gifs/youtube.gif'
import TicAnimation from '../gifs/tic.gif'

const grid = {
	display: 'grid',
	marginTop: '5em',
	gridTemplateColumns: 'repeat(2,20em)',
	gridRowGap: '3em',
	gridColumnGap: '12em',
	justifyContent: 'center',
	marginRight: '6em',
}

const title = {
  fontFamily: 'Roboto',
  fontSize: '42px',
  letterSpacing: '0.3em',
  textAlign: 'center',
  marginTop: '1em',
}

const calculatorContent = [
	'---------------  Project: CALCULATOR  --------------------',
	'www.github.com/ferflo77/calculator',
]

const chatContent = [
	'---------------  Project: CHAT!  -----------------------',
	'www.github.com/ferflo77/chat',
]

const memoryContent = [
	'---------------  Project: MEMORY!  --------------------',
	'https://codepen.io/josefer1710/pen/jLEebX',
]

const houseContent = [
	'---------------  Project: HOUSE!  --------------------',
	'https://codepen.io/josefer1710/pen/VWgoEY',
]

const youtubeContent = [
	'---------------  Project: YOUTUBE!  --------------------',
	'www.github.com/ferflo77/youtube',
]

const ticContent = [
	'---------------  Project: TIC TAC TOE!  -----------------',
	'soon to be uploaded somewhere!',
]

export default class Main extends Component {

  render() {
    return (
    	<div>
	    	<h2 style={title}>Portfolio!</h2>
	      <div style={grid}>
	        <Card animation={CalculatorAnimation} content={calculatorContent} />
	        <Card animation={ChatAnimation} content={chatContent}/>
	        <Card animation={MemoryAnimation} content={memoryContent}/>
	        <Card animation={HouseAnimation} content={houseContent}/>
	        <Card animation={YoutubeAnimation} content={youtubeContent}/>
	        <Card animation={TicAnimation} content={ticContent}/>
	      </div>
      </div>
    )
  }
}

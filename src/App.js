import React, { Component } from 'react'
import './App.css';
import Box from './components/box'
import winner from './components/winner'

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      next : 'X',
      winner : 'no one yet'
    }
    this.square = this.square.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }
  clickMe(i){
    if(this.state.squares[i] === null && this.state.winner === 'no one yet'){
      const squares = this.state.squares.slice();
      
      squares[i] = this.state.next;
      this.setState({
        squares:squares,
        next : this.state.next == 'X' ? 'O': 'X' ,
      })
     const wi = winner(squares)
     if(wi){
      this.setState({
        winner :wi
      })
     }
    }
  }
  square(i){
    return (
      <Box val = {this.state.squares[i]} clickMe={()=>this.clickMe(i)} />
    )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Let's play Tic-Tak-Toi <br/>...........................................</h1>
        </header>
        <div className="body" >
        <div> <h1>Next turn is {this.state.next} </h1> </div>
            <div className="row" >
                {this.square(0)} 
                {this.square(1)}
                {this.square(2)}
            </div>
            <div className="row" >
                {this.square(3)}
                {this.square(4)}
                {this.square(5)}
            </div>
            <div className="row" >
                {this.square(6)}
                {this.square(7)}
                {this.square(8)}
            </div>
        </div>
        <div> <h2> winner is {this.state.winner} </h2> </div>
    </div>
    )
  }
}


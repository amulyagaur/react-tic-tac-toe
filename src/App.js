import React from 'react';
import {Button,Container,Row,Col, Alert} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Square extends React.Component {

  buttonClick = ()=>{

    this.props.func();
  }

  render() {
    return (
      <>
      <style type="text/css">
      {`
      .btn-flat {
        background-color: purple;
        color: white;
        font-size: 45px;
        padding: 0;
        height: 140px;
        width: 140px;
        border: 1px solid #999;
        font-weight: bold;
        line-height: 34px;
      }
      `}
    </style>
      <Button variant="flat" className="square" onClick={this.buttonClick} >
        {this.props.value}
      </Button>
      </>
    );
  }
}

class Board extends React.Component {

  renderSquare(i) {
    return(
     <Square value={this.props.squares[i]} func={ ()=>this.props.handleClick(i) }/>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      history:[{
        squares: Array(9).fill(null)
      }],
      stepNumber:0,
      xIsNext: true
    }
  }

  changeValue = (i)=>{
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <>
        <li key={move} >
          <Button variant="info" onClick={() => this.jumpTo(move)}>{desc}</Button>
        </li>
        </>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      alert("Congratulations... "+ status);
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game" >
        <Jumbotron fluid>
          <Container>
          <h1>Tic Tac Toe</h1>
          <p>
          Awesome childhood game!
          </p>
          </Container>
        </Jumbotron>
        <Container>
  <Row>
    <Col>
        <div className="game-board">
          <Board squares={current.squares} handleClick={(i)=>this.changeValue(i)}/>
        </div>
    </Col>
    <Col>
        <div className="game-info">
          <div>
            <Alert variant={winner ? "success" : "primary"}>
          <h2>{ status }</h2>
          </Alert>
          </div>
          <ol>{moves}</ol>
        </div>
      </Col>
      
      </Row>
      </Container>
      </div>
    );
  }
}

export default Game;

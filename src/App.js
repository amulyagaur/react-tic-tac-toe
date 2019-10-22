import React from 'react';
import {Button,Container,Row,Col, Alert,OverlayTrigger,Tooltip,Spinner,Jumbotron,ProgressBar} from 'react-bootstrap';


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
        height: 120px;
        width: 120px;
        border: 1px solid #999;
        font-weight: bold;
        line-height: 34px;
      }
      `}
    </style>
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Tooltip id={`tooltip-top`}>
          Tap to make a move...
        </Tooltip>
      }
    >
      <Button variant="flat" className="square" onClick={this.buttonClick} >
        {this.props.value}
      </Button>
      </OverlayTrigger>
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

class AnimatedCircles extends React.Component{
  render()
  {
    return(
      <div>
      <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" /> 
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
    const steps = this.state.stepNumber;
    if (calculateWinner(squares) || squares[i] || steps===9) {
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
    let steps = this.state.stepNumber;
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
      alert("🎉🎉🎉🎉 Congratulations... "+ status + " 🎉🎉🎉🎉");
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    if(steps===9 && !winner)
    {
      status='Match Tied!';
      alert('Match Tied!');
    }
      
    return (
      <div className="game" >
        <Jumbotron fluid>
          <Container>
          <AnimatedCircles/>
          <center><h1>Tic Tac Toe - Awesome Childhood Game</h1></center>
          <AnimatedCircles/>
          </Container>
        </Jumbotron>
        <ProgressBar animated now={(100*steps)/9} variant="warning" />
        <br></br>
        <Container>
  <Row>
    <Col>
        <div className="game-board" >
          <Board squares={current.squares} handleClick={(i)=>this.changeValue(i)}/>
        </div>
    </Col>
    <Col>
        <div className="game-info">
          <div>
            <Alert variant={winner ? "success" : (steps===9 ?"danger":"primary")}>
          <h2>{ status }</h2>
          </Alert>
          </div>
          <ol>{moves}</ol>
        </div>
      </Col>
      
      </Row>
      </Container>
      <br></br>
      
      </div>
    );
  }
}

export default Game;

import React from "react";
import Square from "./square";
import calculateWinner from "./calculateWinner";

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // 配列9個用意して全部nullを入れる
  //     squares: Array(9).fill(null),
  //     // xIsNextというStateを用意 最初はtrue
  //     xIsNext: true
  //   };
  // }

  // handleClick(i) {
  //   // 配列を複製
  //   const squares = this.state.squares.slice();

  //   // calculateWinnerの結果がtrue、もしくはクリックした盤面が既に中身が入っていたら
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   // クリックされた盤面ににxIsTextの真偽によってXかOかを入れる
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     // stateであるsquaresに反映させる
  //     squares: squares,
  //     // stateのxIsNextの真偽を逆転させる
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        // propsを渡す
        // valueはstate XかOか
        // だったけど 今は親のprops
        value={this.props.squares[i]}
        // クリックしたらhandleClickを実行する
        // だったけど今は親のprops.onClick
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }

  render() {
    // // 変数winnerにcalculateWinnerの結果を入れる
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   // winnerがtrue、つまりなにか入っていれば
    //   status = "Winner:" + winner;
    // } else {
    //   // winnerがfalse、nullであれば
    //   status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    // }

    // レンダリングする内容
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

export default Board;

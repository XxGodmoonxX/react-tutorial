import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import "./index.css";
import calculateWinner from "./calculateWinner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          // 配列9個用意して全部nullを入れる
          squares: Array(9).fill(null)
        }
      ],
      // xIsNextというStateを用意 最初はtrue
      xIsNext: true
    };
  }

  handleClick(i) {
    // stateのhistoryを代入
    const history = this.state.history;
    // historyの今のものを代入
    const current = history[history.length - 1];
    // 配列を複製
    const squares = current.squares.slice();
    // calculateWinnerの結果がtrue、もしくはクリックした盤面が既に中身が入っていたら
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // クリックされた盤面ににxIsTextの真偽によってXかOかを入れる
    squares[i] = this.state.xIsNext ? "X" : "O";
    // stateをSetする
    this.setState({
      // historyに新しくsquaresの配列をつなげる
      history: history.concat([
        {
          // stateであるsquaresに反映させる
          squares: squares
        }
      ]),
      // stateのxIsNextの真偽を逆転させる
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    // stateのhistoryを代入
    const history = this.state.history;
    // historyの今のものを代入
    const current = history[history.length - 1];
    // 変数winnerにcalculateWinnerの結果を入れる
    const winner = calculateWinner(current.squares);
    // historyにmapをかける
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li>
          {/* ボタンをクリックしたらjumpTo */}
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      // winnerがtrue、つまりなにか入っていれば
      status = "Winner:" + winner;
    } else {
      // winnerがfalse、nullであれば
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

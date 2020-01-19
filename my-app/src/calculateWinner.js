function calculateWinner(squares) {
  // この埋まり方をしていれば終了
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // lines[i] 例えば 0, 1, 2の盤面が同じ状態か、同じなら終了なのでその同じ状態になている方を返す OかXか
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // 埋まっていないのであればnullを返す
  return null;
}

export default calculateWinner;
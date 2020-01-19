import React from "react";

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 関数コンポーネント化 親からpropsを受け継ぐ
function Square(props) {
  return (
    // 親のonClick
    <button className="square" onClick={props.onClick}>
      {/* 親のvalue */}
      {props.value}
    </button>
  );
}

export default Square;

import React from "react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "red",
//       padding: "5px 5px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "10%",
//       transform: "translate(-5%, -5%)"
//     }}
//   >
//     {text}
//   </div>
// );

const LinkFunction = props => {
  return <div className="Marker">{props.text}</div>;
};

export default LinkFunction;

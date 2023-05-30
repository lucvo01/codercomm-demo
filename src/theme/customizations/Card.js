// import React from "react";

function Card(theme) {
  return {
    MuiCard: {
      styledOverrides: {
        root: {
          position: "relative",
          boderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0
        }
      }
    }
  };
}

export default Card;

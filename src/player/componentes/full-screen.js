import React from "react";
import FullScreenIcon from "../../icons/componentes/full-screen"
import "./full-screen.css"
const FullScreen = props =>
{
  return(
    <div
      className="FullScreen"
      onClick={props.handleFullScreenClick}
    >
      <FullScreenIcon
        size={25}
        color="white"
        ></FullScreenIcon>
    </div>
  )
}

export default FullScreen

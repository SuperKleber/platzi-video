import React from "react"
import VolumenIcon from "../../icons/componentes/volume"
import "./volumen.css"
const Volumen = props =>
{

  return(
    <button className="Volume">
      <div
        onClick={props.handleClickVolume}
        >
        <VolumenIcon
          color="white"
          size={25}
          />

      </div>
    <div className="Volume-range">
      <input
        type="range"
        min={0}
        max={1}
        step={.05}
        value={props.volumen}
        onChange={props.handleVolumenChange}
      />
    </div>
    </button>
  )
}
export default Volumen

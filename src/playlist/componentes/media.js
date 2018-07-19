import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import "./media.css";

class Media extends PureComponent {
  state =
  {
    author: "Kleber Rivamontan"
  }
handleClick = event =>
{
  this.props.openModal(this.props)
}
  render() {
    const styles=
    {
      container:
      {
         color: "#44546b",
         cursor: "pointer",
         width: 260,
         border: "1px solid red",
      }
    }
    return (
      <div className="Media" onClick={this.handleClick}>
        <div>
          <img
            src={this.props.cover}
            alt="imagenxd"
            width={260}
            height={160}
          />
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}
Media.propTypes =
{
  cover:PropTypes.string,
  title:PropTypes.string.isRequired,
  author:PropTypes.string,
  type: PropTypes.oneOf(["video","audio"])
}
export default Media;

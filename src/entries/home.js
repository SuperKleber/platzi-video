import React from 'react';
import ReactDOM, {render} from 'react-dom';
// import {render} from'react-dom'; Es lo mismo que lo de arriba
// import Playlist from "../playlist/componentes/playlist";
import Home from "../pages/containers/home"
import data from "../api.json"

const homeContainer = document.getElementById("home-container");
// const holaMundo =<h1>Holi Crayolisnguis :v  biutiful</h1>;

render(<Home data={data}/>, homeContainer);

import './App.css';
import React from "react";
import ReactDOM from "react-dom";

import Map from './Map'
import '../node_modules/leaflet/dist/leaflet.css'

function App() {
  return (
      <Map />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;

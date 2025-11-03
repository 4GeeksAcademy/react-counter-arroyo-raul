import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter.jsx';

let seconds = 72;
const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(
    <React.StrictMode>
      <SecondsCounter sec={seconds}/>
    </React.StrictMode>
  );
}

render();

setInterval(() => {
  seconds += 1;
  render();
}, 1000);
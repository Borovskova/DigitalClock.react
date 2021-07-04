import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function tick() {
  const element = (
    <div>
    <h1>Digital clock</h1>
    <div className='clock'>{new Date().toLocaleTimeString()}
    </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

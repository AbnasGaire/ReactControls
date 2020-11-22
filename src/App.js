import React,{useState} from 'react';

import './App.css';

function App() {
  const [Ver ,setVer]=useState(10);
  const [ Blur ,setBlur]=useState(10);
  const [Hori ,setHori]=useState(10);
  return (
    <div className="app">
        <div className="controls">
          <label>Horizontal Length</label>
          <input type="range"  min="-200" max="200" value={Hori} onChange={e=>setHori(e.target.value)} />

          <label>Vertical Length</label>
          <input type="range"  min="-200" max="200" value={Ver} onChange={(e)=>setVer(e.target.value)} />

          <label>Blur</label>
          <input type="range"  min="-200" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
        </div>
  
        <div className="output">
          <div className="box" style={{ boxShadow:`${Hori}px ${Ver}px ${Blur}px black`}}>
 
          </div>
        </div>
    </div>
  );
}

export default App;

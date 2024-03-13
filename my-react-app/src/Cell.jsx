import React, { useContext } from 'react';
import { GridContext } from './GridContext'; 

function Cell({ index }) {
  const { cellState, cellToggle } = useContext(GridContext);
  const isOn = cellState[index];
  const style = { 
    width: '100px', 
    height: '100px', 
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white'
};

  return (
    <div 
        className="cell" 
        style={style} 
        onClick={() => cellToggle(index)} 
    />
  );
}

export default Cell;
import { useContext } from 'react';
import { GridContext } from './GridContext';
import Cell from './Cell'

const Grid = () => {
  const { count } = useContext(GridContext);
    return (
      <div>
        <h1>Count: { count }</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)' }}>
          <Cell index={0} />
          <Cell index={1} />
          <Cell index={2} />
          <Cell index={3} />
        </div>
      </div>
    );
};

export default Grid;
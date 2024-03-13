import { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({children}) => {

    const [cellState, setCellState] = useState(Array(4).fill(false));
    const [count, setCount] = useState(0);

    const cellToggle = (index) => {
        const updatedState = [...cellState];
        updatedState[index] = !updatedState[index];
        setCellState(updatedState);
        setCount(updatedState.filter(state => state).length);
    };

    return (
        <GridContext.Provider value={{ cellState, cellToggle, count }}>
            {children}
        </GridContext.Provider>
    );
};
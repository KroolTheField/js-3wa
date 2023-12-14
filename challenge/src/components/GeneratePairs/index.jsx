import { useReducer, useState } from 'react';

const initialState = {
  numbers: [],
  pairs: [],
  maxListSize: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case 'GENERATE_PAIRS':
      const pairs = [];
      const numbersCopy = [...state.numbers];
      while (numbersCopy.length > 1) {
        const pair = [numbersCopy.pop(), numbersCopy.pop()];
        pairs.push(pair);
      }
      if (numbersCopy.length === 1) {
        pairs.push([numbersCopy[0]]);
      }
      return {
        ...state,
        pairs,
      };
    default:
      return state;
  }
};

const GeneratePairs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [randomNumber, setRandomNumber] = useState(0);

  const addRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 30) + 1;
    setRandomNumber(newRandomNumber);
    dispatch({ type: 'ADD_NUMBER', payload: newRandomNumber });
  };

  const generatePairs = () => {
    dispatch({ type: 'GENERATE_PAIRS' });
  };

  return (
    <div className="generate-pairs">
      <h1>Generate Pairs</h1>
      <p>Number: {randomNumber}</p>
      <button onClick={addRandomNumber}>Add</button>
      <div>
        <h2>List:</h2>
        <ul>
          {state.numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <button onClick={generatePairs}>Generate Pairs</button>
      <div>
        <h2>Pairs:</h2>
        <ul>
          {state.pairs.map((pair, index) => (
            <li key={index}>{pair.join(',')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneratePairs;
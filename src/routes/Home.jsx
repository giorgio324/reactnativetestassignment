import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const swap = (array) => {
    for (let index = 0; index < array.length - 1; index += 2) {
      if (index + 1 < array.length) {
        const temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      }
    }
    return array;
  };

  useEffect(() => {
    console.log(swap([1, 2, 3, 4, 2, 3]));
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  );
};

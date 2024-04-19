import React, { useEffect, useState } from 'react';
import data1 from '../data/Array_1.json';
import data2 from '../data/Array_2.json';

export default function List() {
  const [data, setData] = useState([]);
  const putTogether = () => {
    const combinedData = data1.concat(data2);
    const uniqueData = [];

    for (let i = 0; i < combinedData.length; i++) {
      let isDuplicate = false;

      for (let j = 0; j < uniqueData.length; j++) {
        if (combinedData[i].id === uniqueData[j].id) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        uniqueData.push(combinedData[i]);
      }
    }

    setData(uniqueData);
  };

  useEffect(() => {
    putTogether();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <p>{item.body}</p>
            <p>{item.name}</p>
          </>
        );
      })}
    </div>
  );
}

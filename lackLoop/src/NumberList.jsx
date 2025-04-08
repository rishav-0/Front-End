import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

const totalNumbers = 80;
const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);

const Row = ({ index, style }) => (
  <div style={{ ...style, padding: '10px', borderBottom: '1px solid #ccc' }}>
    Number: {numbers[index]}
  </div>
);

const VirtualizedNumberList = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // <List
    //   height={height} // Full screen height
    //   itemCount={numbers.length}
    //   itemSize={40} // Each row is 40px tall
    //   width="100%"
    // >
    //   {Row}
    // </List>
    <>
      {Row}
    </>
  );
};

export default VirtualizedNumberList;

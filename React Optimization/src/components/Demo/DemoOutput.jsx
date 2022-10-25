import React from 'react';

const DemoOutput = (props) => {
  return (
    <div>
      <p>{props.show ? 'This is new!' : ''}</p>;
      <p>{props.show ? 'Click again to remove...' : ''}</p>
    </div>
  );
};

export default React.memo(DemoOutput);

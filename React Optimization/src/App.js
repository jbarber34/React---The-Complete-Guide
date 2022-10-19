import React, { useState } from 'react';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState();
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
    </div>
  );
}

export default App;

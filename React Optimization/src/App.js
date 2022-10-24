import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // Wrap in useCallback to save this function to prevent 'new' function with each rerender
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  // Wrap in useCallback to save this function to prevent 'new' function with each rerender
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;

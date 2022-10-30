import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

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

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [6, 4, 2, 10, 8], []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

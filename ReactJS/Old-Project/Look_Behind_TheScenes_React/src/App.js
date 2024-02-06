import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/demo/Demo';

function App() {
  const [showPara, setShowPara] = useState(false);
  const toggleParaHandler = useCallback(() => {
    setShowPara((prev) => !prev);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

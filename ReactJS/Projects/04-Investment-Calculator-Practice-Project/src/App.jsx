import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import { useState } from "react";



const DEFAULT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_VALUES);

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput( inputIdentifier, newValue){
    setUserInput((preValue) => {
        return{
            ...preValue,
            [inputIdentifier]: +newValue,
        };
    })
  };


  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter duration greater than 0.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App

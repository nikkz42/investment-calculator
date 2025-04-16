import { useState } from "react";
import Header from "./Header.jsx";
import UserInput from "./UserInput.jsx";
import Results from "./Results.jsx";

function App() {
   const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 12,
        duration: 2
    });

    const isDurationValid = userInput.duration >= 1;
    function handlerUserInput(investmentIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [investmentIdentifier]: +newValue,
            };
        });
    }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChangeInput={handlerUserInput}/>
      {isDurationValid ? <Results userInput={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
    </>  
  );
}

export default App

import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {


  const [userInput, setUserInput] = useState({

    initialInvestment: 10000,
    annualInvestment: 1200,
    annualReturn: 6,
    duration: 10
});

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      };
  });
}



  return (
    <>
    <Header></Header>
    <UserInput onChange={handleChange} userInput={userInput}></UserInput>
    <Results userInput={userInput}></Results>
    </>
  );
}

export default App

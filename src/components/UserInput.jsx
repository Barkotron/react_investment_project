import { useState } from "react";

export default function UserInput() {


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
                [inputIdentifier]: newValue
            };
        });
    }

    return (
        <section id="user-input">

            <div class="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}></input>
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}></input>
                </p>
            </div>

            <div class="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.annualReturn} onChange={(event) => handleChange('annualReturn', event.target.value)}></input>
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)}></input>
                </p>
            </div>
        </section>
    );
}
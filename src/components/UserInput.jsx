
export default function UserInput({onChange, userInput}) {

    return (
        <section id="user-input">

            <div class="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)}></input>
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)}></input>
                </p>
            </div>

            <div class="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.annualReturn} onChange={(event) => onChange('annualReturn', event.target.value)}></input>
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)}></input>
                </p>
            </div>
        </section>
    );
}
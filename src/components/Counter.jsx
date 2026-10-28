import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [countStep, setCountStep] = useState(0);

    return(
        <div>
            <div>
                <h1>Counter: {count}</h1>
                <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
                <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            </div>

            <div>
                <h1>Configuration Step Counter: {countStep}</h1>
                <input type="number" min={1} onChange={(e) => setStep(Number(e.target.value))} value={step}/>
                <button onClick={() => setCountStep(prev => prev + step)}>Increment</button>
                <button onClick={() => setCountStep(prev => prev - step)}>Decrement</button>
            </div>
            <button onClick={() => {
                setCount(0);
                setStep(1);
                setCountStep(0);
            }}>Reset Counter</button>
        </div>
    )
}

export default Counter;
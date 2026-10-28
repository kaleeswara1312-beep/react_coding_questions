import { useState } from "react";

function Toggle(){
    const [isToggled, setIsToggled] = useState(false);

    return(
        <div>
            <h1>Toggle</h1>
            <button onClick={() => setIsToggled(prev => !prev)}> 
                {isToggled ? "Yes" : "No"}
            </button>
        </div>
    )
}

export default Toggle;
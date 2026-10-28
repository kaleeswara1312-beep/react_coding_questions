
import { useState } from "react";

function Form() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);

        console.log("formData", Object.fromEntries(formData.entries()))
        console.log('gender', formData.getAll('gender'));
        
    }

    return (
        <div>
            <h1>Form</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type = "text" name="username" required />
                    </div>
                    <div>
                        <input type = "password" name="password" />
                    </div>
                    <div>
                        <input type = "checkbox" name="hobbies" value={"Playing"}/>
                        <input type = "checkbox" name="hobbies" value={"Studying"}/>
                    </div>
                    <div>
                        <input type = "radio" name="gender" value={"Male"}/>
                        <input type = "radio" name="gender" value={"Female"}/>
                    </div>
                    <div>
                        <select name="department" value={"BCA"}>
                            <option>IT</option>
                            <option>BCA</option>
                            <option>CS</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default Form;

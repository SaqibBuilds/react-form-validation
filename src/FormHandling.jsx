import { useState } from "react";

function FormHandling() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errName, setErrName] = useState(true);
    const [errEmail, setErrEmail] = useState(true);

    function formSubmitted(e) {
        e.preventDefault();
        if (name.length < 3 || email.length < 5) {
            alert("Please fix the erros.");
        } else {
            console.log("Hi " + name + ", Your email is: " + email + ".");
            alert("Thank you! " + name  + "! \n Your form has been submitted, please see console logs.");
        }
    }

    function nameFunc(e) {
        let elemName = e.target.value;
        setName(elemName);
        if (elemName.length < 3) {
            setErrName(true);
        } else {
            setErrName(false);
        }
    }

    function emailFunc(e) {
        let elemEmail = e.target.value;
        setEmail(elemEmail);
        if (elemEmail.length < 5) {
            setErrEmail(true);
        } else {
            setErrEmail(false);
        }
    }

    return (
        <div className="form">
            <h1>React Form Validation</h1>
            <form onSubmit={formSubmitted}>
                <label htmlFor="name">Your Name *</label>
                <input 
                    id="name"
                    type="text" 
                    placeholder="Enter Your Name" 
                    onChange={nameFunc}
                ></input>
                <br></br>
                {errName ? <span className="redClass">Name can not be less than 3 characters.</span> : <span className="greenClass">Awesome! Looks Good.</span>}
                <br></br>
            
                <br></br>
                <label htmlFor="email">Your Email *</label>
                <input 
                    id="email"
                    type="text" 
                    placeholder="Enter Your Phone" 
                    onChange={emailFunc}
                ></input>
                <br></br>
                {errEmail ? <span className="redClass">Email can not be less than 5 characters.</span> : <span className="greenClass">Awesome! Looks Good.</span>}
                <br></br>
                

                <br></br>
                
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
export default FormHandling;
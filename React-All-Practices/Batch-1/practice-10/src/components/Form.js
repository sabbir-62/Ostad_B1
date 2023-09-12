import React, {useState} from 'react';
import './form.css';


const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(name, email, password);
        let information = {
            name,
            email,
            password
        }
        console.log(information);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required />
                </div> 

                <div className='formGroup'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required />
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
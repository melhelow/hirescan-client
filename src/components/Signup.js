import React, { useState } from "react";
import Auth from "../utils/auth";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [addUserAlert, setAddUserAlert] = useState('');
    const [addEmailAlert, setAddEmailAlert] = useState('');
    const [addPassAlert, setAddPassAlert] = useState('');

    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass, name);
    
        if (name.length === 0) {
          setAddUserAlert("Please enter a username!");
        } else 
        if (email.length === 0) {
          setAddEmailAlert("Please enter an email!");
        } else
        if (pass.length === 0) {
          setAddPassAlert("Please enter a password!");
        } else
        {
          const response = await addUser({
            variables: {
              username: name,
              email: email,
              password: pass,
            },
          });
    
          const token = response.data.addUser.token;
          Auth.login(token);
        }
      };
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <h4 style={{ color: 'red' }}>{addUserAlert}</h4>

            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />

                <label htmlFor="email">Email</label>
                <h4 style={{ color: 'red' }}>{addEmailAlert}</h4>

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <h4 style={{ color: 'red' }}>{addPassAlert}</h4>

                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch()}>Already have an account? Login here.</button>

        </div>
    )
}


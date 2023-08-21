import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [wrongInfo, setWrongInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

            fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `mutation { login(email: "${email}", password: "${pass}")  { token } }` })
        }).then(res => res.json()).then(data => {
            console.log(data.data.login)
            if (data.data.login) {
            localStorage.setItem('id_token', data.data.login.token);
            window.location.pathname='/dashboard' 
            } setWrongInfo("Incorrect Username or Password -- Try again!");

        }).catch(err => console.log(err))
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <h4 style={{ color: 'red' }}>{wrongInfo}</h4>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch()}>Don't have an account? Register here.</button>
        </div>
    )
}
export default Login;
import React from 'react';
import Auth from '../utils/auth';
import Form from '../components/Form';


export default function Profile () {

    

if(Auth.loggedIn()) {
    return (
        <div>
            <h1>My Profile</h1>
            <Form />
        </div>

    );
}
else {
    window.location.assign('/login');
}
}


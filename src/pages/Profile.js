import React from 'react';
import Auth from '../utils/auth';

import Searchpage from '../pages/Searchpage';

export default function Profile () {

    

if(Auth.loggedIn()) {
    return (
        <div>
            <h1>My Profile</h1>
            <Searchpage/>
        </div>

    );
}
else {
    window.location.assign('/login');
}
}


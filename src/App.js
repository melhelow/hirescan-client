import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Register } from "./components/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Review from './pages/Review';

import Searchpage from './pages/Searchpage';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  // uri: 'https://cal-pal-server-273e253c14e5.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
    const toggleForm = () => {
    if (window.location.pathname === '/login') {
      window.location.pathname = '/register'
    } else {
      window.location.pathname = '/login'
    }
  }
  return (
<ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <nav>
            <Navbar />
          </nav>
          <Routes>
            {/* <Route path='calories' element={<Calories />} /> */}
            <Route path='login' element={<Login onFormSwitch={toggleForm} />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/searchpage' element={<Searchpage />} />
            <Route path='/register' element={<Register onFormSwitch={toggleForm} />} />
            <Route path='/about-me' element={<Aboutme />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
 
  );
}

export default App;

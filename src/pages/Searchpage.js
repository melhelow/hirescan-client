import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEW } from "../utils/queries";
import {getUsernameFromToken, getFormattedDate} from '../utils/helpers';





const Searchpage = () => {

    const [company, setCompany] = useState("");

    
  
    // const [searchResults, setSearchResults] = useState([]);
    const Navigate = useNavigate();



    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(company);
       ( setCompany(""))
        // fetchCompanyData();
        
    };

    const addReview = () => {
        Navigate("/myprofile"); 
    };
    const { loading, error, data } = useQuery(GET_REVIEW , {
        variables: {
            username: getUsernameFromToken(),
            review: getFormattedDate(),
          },
        });
      
        const companiesFromDatabase = data?.getReview;
      
        console.log(companiesFromDatabase);

    if (loading) {

     return <p>Loading...</p>;}
     if(data) {
            console.log(data);
        }
    if (error) 
    {
        return <p>Error {error.message}</p>;
    }
   
    return (
        <div className= " search-companies">
            <div className="search-bar">
                <form className="search-form" onSubmit={handleFormSubmit}>
                    <input
                       id="search"
                       type="text"
                       value={company}
                       onChange={handleCompanyChange}
                        placeholder="Search for a company"
                    />
                    <button type="submit">Search</button>

                </form>

                <button onClick={addReview}>Add Review</button>
                    
            </div>


         

        </div>
    );
};

export default Searchpage;
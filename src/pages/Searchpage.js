import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_REVIEW } from "../utils/mutations";


const Searchpage = () => {

    const [company, setCompany] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(company);
        setCompany([]);
    };
    const Navigate = useNavigate();
    const addReview = () => {
        Navigate("/login"); 
    };
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
import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";


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
    return (
        <div className= "search-companies">
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
                    
            </div>


         

        </div>
    );
};

export default Searchpage;
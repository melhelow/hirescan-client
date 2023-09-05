import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";



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
    // const [addReview] = useMutation(ADD_REVIEW, {
    //     refetchQueries: [{
    //         query: GET_COMPANY_BY_NAME_AND_REVIEW,
    //         variables: {
    //              company: getUsernameFromToken(), 
    //              review: getFormattedDated(),


          
    //         },
    //     },
    // ],
    // });



    const addReview = () => {
        Navigate("/myprofile"); 
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
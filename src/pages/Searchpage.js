import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useQuery , gql} from "@apollo/client";
import { GET_ALL_USERS} from "../utils/queries";
import { GET_REVIEW } from "../utils/queries";
import { GET_ALL_REVIEWS} from "../utils/queries";

import {getUsernameFromToken, getFormattedDate} from '../utils/helpers';





const Searchpage = () => {



    const [company, setCompany] = useState("");
    const [review, setReview] = useState([]);
    const [searchResults, setSearchResults] = useState("");

    // console.log(searchResults)


    const Navigate = useNavigate();
   


    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
        
    };

    const handleSearchChange = (event) => {
        setSearchResults(event.target.value);

       
        
    };
    


    const handleFormSubmit = (event) => {
        event.preventDefault();
   
       ( setCompany(""))
    
       
        
    };


    const addReview = () => {
        Navigate("/myprofile"); 
    };

   const { loading, error, data } = useQuery(GET_ALL_REVIEWS, {
  variables: {
    company: company,
    review: review
    
  },
});



// Use a useEffect to log data when it's available
useEffect(() => {
  if (data) {
    const filteredReviews = data.getAllReviews.filter((review) => review.company);

    console.log(filteredReviews);
   
  }
}, [data]);

if (loading) {
  return <p>Loading...</p>;
  
  
}

if (error) {
  return <p>Error: {error.message}</p>;
}

 
  


    return (
        <div className= " search-companies">
            <div className="search-bar">
                <form className="search-form" onSubmit={handleFormSubmit}>
                    <input
                       id="search"
                       type="text"
                       value={company}
                       onChange={handleSearchChange}
                        placeholder="Search for a company"
                    />
                    <button type="submit">Search</button>
                  

                </form>
                <div>
                  <table>
                
                      <tr>
                        <th>Company</th>
                        <th>Review</th>
                      </tr>
                  
                    <tbody>
                    {data.getAllReviews.filter((review) => {
                      if (searchResults.toLowerCase() === '') {
                        return true; // Include all reviews when searchResults is empty
                      } else {
                        return review.company.toLowerCase().includes(searchResults.toLowerCase());
                      }
                    })
                      .map((review) => (
                        <tr key={review._id}>
                          <td>{review.company}</td>
                          <td>{review.review}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button onClick={addReview}>Add Review</button>
                    
            </div>


         

        </div>
    );
};

export default Searchpage;
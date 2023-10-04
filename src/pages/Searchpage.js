import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState

import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ALL_REVIEWS} from "../utils/queries";







const Searchpage = () => {


    const [searchResults, setSearchResults] = useState("");
    const [filteredReviews, setFilteredReviews] = useState([]);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission or any default action
        handleSearchClick(); // Call your search function here (e.g., handleSearchClick)
      }
    };
  

    const Navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchResults(event.target.value);

       
        
    };


    const addReview = () => {
        Navigate("/myprofile"); 
    };

   const { loading, error, data } = useQuery(GET_ALL_REVIEWS);



// Use a useEffect to log data when it's available
useEffect(() => {
  if (data) {

   
  }
}, [data]);

if (loading) {
  return <p>Loading...</p>;
  
  
}

if (error) {
  return <p>Error: {error.message}</p>;
}

const handleSearchClick =() => {
const filteredReviews = data.getAllReviews.filter((review) => {
  if (searchResults.toLowerCase() === '') {
    return true; // Include all reviews when searchResults is empty
  } else {
    return review.company.toLowerCase().includes(searchResults.toLowerCase());
  }
  
  
});

setFilteredReviews(filteredReviews);



};


    return (
      <div className="search-companies">
        <div className="search-bar">
          <form className="search-form">
            <input
              id="search"
              type="text"
              value={searchResults}
              onChange={handleSearchChange}
              placeholder="Search for a company"
              onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={handleSearchClick}>
              Search
            </button>
          </form>
        </div>
        <div>
        {filteredReviews.length > 0 ? (
         
          <table>
            <thead>
              <tr>

                <th>Company</th>
                <th>Review</th>
                <th>Address</th>
                <th>Date</th>
                <th>email</th>
                <th>Telephone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((review) => (
                <tr key={review._id}>
                  <td>{review.company}</td>
                  <td>{review.review}</td>
                  <td>{review.address}</td>
                  <td>{review.date}</td>
                  <td>{review.email}</td>
                  <td>{review.telephone}</td>
                  <td>{review.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          filteredReviews.length === 0 && searchResults !== "" && (
            <p>No data found. Do you want to add your experience?</p>
          ) 
        )}
        </div>
    
        <button onClick={addReview}>Add Review</button>
      </div>
    );
}

export default Searchpage;
import React, { useEffect, useState } from "react"; // Imports React libraries as well as useEffect and useState
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useQuery , gql} from "@apollo/client";
// import { GET_ALL_USERS} from "../utils/queries";
// import { GET_REVIEW } from "../utils/queries";
import { GET_ALL_REVIEWS} from "../utils/queries";







const Searchpage = () => {



    const [company, setCompany] = useState("");
    const [review, setReview] = useState([]);

    const [searchResults, setSearchResults] = useState("");
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [searchMessage, setSearchMessage] = useState("");

    // console.log(searchResults)


    const Navigate = useNavigate();
   


    // const handleCompanyChange = (event) => {
    //     setCompany(event.target.value);
        
    // };

    const handleSearchChange = (event) => {
        setSearchResults(event.target.value);

       
        
    };
    


    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
   
    //  console.log(review);
    
       
        
    // };


    const addReview = () => {
        Navigate("/myprofile"); 
    };

   const { loading, error, data } = useQuery(GET_ALL_REVIEWS);



// Use a useEffect to log data when it's available
useEffect(() => {
  if (data) {
    // const filteredReviews = data.getAllReviews.filter((review) => review.company);

    // console.log(filteredReviews);
   
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
let displayContent = null; // Initialize as null

    if (loading) {
        displayContent = <p>Loading...</p>;
    } else if (error) {
        displayContent = <p>Error: {error.message}</p>;
    } else if (filteredReviews.length === 0 && searchResults !== "") {
        // Display "No data found" message only when a search is performed and no data is found
        displayContent = <p>No data found.Do you want to add your experince?</p>;
    } 
 




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
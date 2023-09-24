import React, { useState} from "react";
import { useMutation } from "@apollo/client";
import { SAVE_REVIEW } from "../utils/mutations";
import { GET_ALL_REVIEWS } from "../utils/queries";
import { getUsernameFromToken, getFormattedDate } from "../utils/helpers";

function Form() {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [review, setReview] = useState("");
  // const [currentDate, setCurrentDate] = useState("");
  // const [reviewData, setReviewData] = useState([]);



  const [saveReview] = useMutation(SAVE_REVIEW, {
    refetchQueries: [
      {
        query: GET_ALL_REVIEWS,
        variables: {
          username: getUsernameFromToken(),
          date: getFormattedDate(),
          company,
          address,
          personInCharge,
          telephone,
          email,
          website,
          review,
        },
      },
    ],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // setReviewData([]);



    try {
      const { data } = await saveReview({
        variables: {
          username: getUsernameFromToken(),
          date: getFormattedDate(),
          company,
          address,
          personInCharge,
          telephone,
          email,
          website,
          review,
        },
      }
      
      );
      console.log(data)
     

      // Clear all input fields
      setCompany("");
      setAddress("");
      setPersonInCharge("");
      setTelephone("");
      setEmail("");
      setWebsite("");
      setReview("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        name="personInCharge"
        placeholder="Person in Charge"
        value={personInCharge}
        onChange={(e) => setPersonInCharge(e.target.value)}
      />
      <input
        type="text"
        name="telephone"
        placeholder="Telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <textarea
        name="review"
        placeholder="Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

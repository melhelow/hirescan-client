import { gql } from '@apollo/client';

export const GET_USER = gql`
query GetUser($getUserId: ID!) {
  getUser(id: $getUserId) {
    _id
    email
    password
    username
  }
}`

export const GET_ALL_USERS = gql`
query Query {
    getAllUsers {
      _id
      email
      password
      username
    }
  }
`
export const GET_REVIEW = gql`
query GetReview($getReviewId: ID!) {
     
  getReview(id: $getReviewId) {
    _id
    address
    company
    date
    email
    personInCharge
    review
    telephone
    username
    website
  }
}`


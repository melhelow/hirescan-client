import { gql } from '@apollo/client';

export const GET_USER = gql`
query Query($getUserId: ID!) {
  getUser(id: $getUserId) {
    _id
    email
    password
    username
  }
}
`

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
export const GET_ALL_REVIEWS = gql`
query GetAllReviews {
  getAllReviews {
  
    company
    
    review
 
  }
}
`
export const GET_REVIEW = gql`
query Query($getReviewId: ID!) {
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
export const GET_REVIEW_BY_COMPANY = gql`
query Query($company: String!) {
  getReviewByCompany(company: $company) {
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
export const GET_COMPANY_BY_ID = gql`
query Query($getCompanyByIdId: ID!) {
  getCompanyById(id: $getCompanyByIdId) {
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

export const GET_ALL_COMPANIES = gql`
query Query {
  getAllCompanies {
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





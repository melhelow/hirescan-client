import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password:$password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
  `
export const ADD_REVIEW = gql`
mutation Mutation($username: String!, $company: String!, $personInCharge: String!, $telephone: String!, $email: String!, $website: String!, $address: String!, $review: String!) {
  addReview(username: $username, company: $company, personInCharge: $personInCharge, telephone: $telephone, email: $email, website: $website, address: $address, review: $review) {
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

export const REMOVE_REVIEW = gql`
mutation Mutation($id: ID!) {
  removeReview(_id: $id)
}
`
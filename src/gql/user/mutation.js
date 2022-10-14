import { gql } from '@apollo/client'

export const COMPLETE_SIGN_UP = gql`
  mutation ($data: ProfileInput!) {
    completeSignUp(data: $data)
  }
`

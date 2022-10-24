import { gql } from '@apollo/client'

export const AUTH = gql`
  mutation ($data: TelInput!) {
    auth(data: $data)
  }
`
export const VERIFY = gql`
  mutation ($data: VerifyInput!) {
    verify(data: $data) {
      status
      token
    }
  }
`
export const COMPLETE_SIGN_UP = gql`
  mutation ($data: ProfileInput!) {
    completeSignUp(data: $data)
  }
`

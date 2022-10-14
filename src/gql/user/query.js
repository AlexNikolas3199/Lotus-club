import { gql } from '@apollo/client'

export const FIND_USER_ISFULLPROFILE = gql`
  query ($where: UserWhereUniqueInput!) {
    findUniqueUser(where: $where) {
      isFullProfile
    }
  }
`

import { gql } from '@apollo/client'

export const FIND_USER_ISFULLPROFILE = gql`
  query ($where: UserWhereUniqueInput!) {
    findUniqueUser(where: $where) {
      isFullProfile
    }
  }
`
export const ME = gql`
  query {
    me {
      id
      name
      surname
      email
      tel
      busy {
        id
        event {
          id
          image
          date
          title
          description
          specialist {
            id
            name
            surname
            avatar
            description
          }
        }
      }
    }
  }
`
export const MEID = gql`
  query {
    me {
      id
      busy {
        event {
          id
        }
      }
    }
  }
`

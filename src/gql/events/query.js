import { gql } from '@apollo/client'

export const FIND_MANY_EVENT = gql`
  query ($where: EventWhereInput) {
    findManyEvent(where: $where) {
      id
      date
      title
      image
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
`

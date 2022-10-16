import { gql } from '@apollo/client'

export const FIND_MANY_EVENT = gql`
  query {
    findManyEvent {
      id
      date
      title
      description
      lektor
    }
  }
`

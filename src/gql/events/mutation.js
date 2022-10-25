import { gql } from '@apollo/client'

export const CREATE_ONE_BUSY = gql`
  mutation ($data: BusyCreateInput!) {
    createOneBusy(data: $data) {
      id
    }
  }
`
export const DELETE_ONE_BUSY = gql`
  mutation ($where: BusyWhereUniqueInput!) {
    deleteOneBusy(where: $where) {
      id
    }
  }
`

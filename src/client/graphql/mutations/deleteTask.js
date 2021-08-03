import { gql } from "@apollo/client";

const DELETE_TASK = gql`
    mutation deleteTask($id: ID) {
        deleteTask(id: $id) {
            _id
            isDone
            task
            body
        }
  }
`;

export default DELETE_TASK
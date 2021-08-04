import { gql } from "@apollo/client";

const CURRENT_TASK = gql`
    query currentTask($id: ID) {
        currentTask(id: $id) {
            _id
            isDone
            task
            body
        }
  }
`;

export default CURRENT_TASK
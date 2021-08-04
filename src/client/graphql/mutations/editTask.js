import { gql } from "@apollo/client";

const EDIT_TASK = gql`
    mutation editTask(
            $id: ID!
            $isDone: Boolean!
            $task: String!
            $body: String!
        ) {
        editTask(
            task: {
                id: $id
                isDone: $isDone
                task: $task
                body: $body
            }) {
            _id
            isDone
            task
            body
        }
  }
`;

export default EDIT_TASK
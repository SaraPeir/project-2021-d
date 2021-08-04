import { gql } from "@apollo/client";

const CREATE_TASK = gql`
    mutation createTask(
            $isDone: Boolean!
            $task: String!
            $body: String!
        ) {
        createTask(
            task: {
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

export default CREATE_TASK
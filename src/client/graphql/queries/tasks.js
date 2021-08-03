import { gql } from "@apollo/client";

const CURRENT_TASKS = gql`
    query currentTasks {
        tasks {
            _id
            isDone
            task
            body
        }
    }
`;

export default CURRENT_TASKS
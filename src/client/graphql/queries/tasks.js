import { gql } from "@apollo/client";

const CURRENT_TASKS = gql`
    query currentTasks {
        tasks {
        _id
        isDone
        task
        }
    }
`;

export default CURRENT_TASKS
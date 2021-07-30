import React from "react"
import CURRENT_TASKS from '../../graphql/queries/tasks'
import DELETE_TASK from '../../graphql/mutations/deleteTask'

import { useQuery, useMutation } from "@apollo/client";

const Tasks = () => {
    const { loading, error, data } = useQuery(CURRENT_TASKS);
    const [deleteTask] = useMutation(DELETE_TASK);
  // add { data, loading, error } when query and mutations will be in separated files
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.tasks.map(({ isDone, task, _id }) => (
      <div key={task}>
        <p>
          {task}: {isDone.toString()}
        </p>
        <button onClick={() => deleteTask({
          variables: {
            id: _id,
          },
        })}>
          Delete
        </button>
      </div>
    ));
  }

  export default Tasks
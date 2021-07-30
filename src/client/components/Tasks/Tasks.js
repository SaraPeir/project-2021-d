import React from "react"
import CURRENT_TASKS from '../../graphql/queries/tasks'
import { useQuery } from "@apollo/client";

const Tasks = () => {
    const { loading, error, data } = useQuery(CURRENT_TASKS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.tasks.map(({ isDone, task }) => (
      <div key={task}>
        <p>
          {task}: {isDone}
        </p>
      </div>
    ));
  }

  export default Tasks
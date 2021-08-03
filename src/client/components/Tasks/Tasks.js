import React from "react"
import CURRENT_TASKS from '../../graphql/queries/tasks'
import Task from '../Task'
import { useQuery } from "@apollo/client";

const Tasks = () => {
    const { loading, error, data } = useQuery(CURRENT_TASKS);
  // add { data, loading, error } when query and mutations will be in separated files
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div className="container-fluid">
        <div className="row gy-5 g-2">
             {
               data.tasks.map(({ isDone, task, _id, body }) => (
                <div key={_id} className="col-4 d-flex justify-content-center">
                  <Task key={_id} isDone={isDone} task={task} id={_id} body={body}  />
                </div>
              ))
             }
        </div>
      </div>
    )
    
  }

  export default Tasks
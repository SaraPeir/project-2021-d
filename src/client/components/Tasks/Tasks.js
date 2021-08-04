import React from "react"
import CURRENT_TASKS from '../../graphql/queries/tasks'
import Task from '../Task'
import { useQuery } from "@apollo/client";
import Modal, {ModalButton} from '../Modal'
import './Tasks.scss'

const Tasks = () => {
    const { loading, error, data } = useQuery(CURRENT_TASKS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div className="todo-container">
        <h3 className="text-center">Tasks board</h3>
        <div className="d-grid gap-2 mx-auto col-6 p-3">
          <ModalButton target={'#create-modal'} text={'Add a task'} />
        </div>
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
        <Modal isToEditTask={false} target={'create-modal'}/>
      </div>
    )
  }

  export default Tasks
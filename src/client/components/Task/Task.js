import React from "react"
import DELETE_TASK from '../../graphql/mutations/deleteTask'
import CURRENT_TASKS from '../../graphql/queries/tasks'
import { useMutation } from "@apollo/client";
import Spinner from '../Spinner'
import Modal, {ModalButton} from '../Modal'
import './Task.scss'

const Task = ({ isDone, task, id, body }) => {
    const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
        refetchQueries: [
            {query: CURRENT_TASKS}
          ],
        }
    );
  
    if (loading) return <Spinner />;
    if (error) return <p>Error :(</p>;

    return(
            <div className="card card-style">
                <div className="card-body">
                <h5 className="card-title">{task}</h5>
                <p>{isDone.toString()}</p>
                <p className="card-text">{body}</p>
                    <div className="buttons-container d-flex justify-content-around">
                        <ModalButton id={id} />
                        <button 
                            onClick={() => deleteTask({
                                            variables: {
                                                id: id,
                                            },
                                        })
                                    } 
                            type="button" 
                            className="btn btn-primary">
                                Delete
                        </button>
                        <Modal id={id} task={task} body={body} isDone={isDone} />
                    </div>
                </div>
            </div>
        ) 
}

export default Task;

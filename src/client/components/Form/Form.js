import React, {useState} from "react"
import EDIT_TASK from '../../graphql/mutations/editTask'
import CREATE_TASK from '../../graphql/mutations/createTask'
import CURRENT_TASKS from '../../graphql/queries/tasks'
import { useMutation } from "@apollo/client";
import Spinner from '../Spinner'

function Form({id, task, body, isDone, isToEditTask}) {
    const [taskInput, setTaskInput] = useState(task);
    const [bodyInput, setBodyInput] = useState(body);
    const [isChecked, setIsChecked] = useState(isDone);
    const [editTask, { loading, error }] = useMutation(EDIT_TASK);
    const [createTask, { loading: createdTaskLoading, error: createdTaskError }] = useMutation(CREATE_TASK, {
        refetchQueries: [
            {query: CURRENT_TASKS}
          ],
        });

    if (loading) return <Spinner />;
    if (error) return <p>Error :(</p>;

    if (createdTaskLoading) return <Spinner />;
    if (createdTaskError) return <p>Error :(</p>;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                isToEditTask ?
                editTask({
                    variables: {
                        id: id,
                        isDone: isChecked,
                        task: taskInput,
                        body: bodyInput,
                    },
                }) :
                createTask({
                    variables: {
                        isDone: false,
                        task: taskInput,
                        body: bodyInput,
                    },
                })

                isToEditTask ? console.log(`ID:${id} SUBMITTED`) : console.log('new task created')
            }  }
            >
                <div className="mb-3">
                    <label htmlFor="task-title" className="form-label">Task</label>
                    <input type="text" className="form-control" id="task-title" defaultValue={task} onChange={e => setTaskInput(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="task-details" className="form-label">Task details</label>
                    <textarea  className="form-control" id="task-details" rows="3" defaultValue={body} onChange={e => setBodyInput(e.target.value)} />
                </div> 
                {
                    isToEditTask && 
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onChange={e => setIsChecked(e.target.checked)} checked={isChecked} />
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                            Completed
                        </label>
                    </div>
                }
                
            <div className="d-grid gap-2 mx-auto col-6 p-3">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                </button>
            </div>
        </form>
    )
}

export default Form
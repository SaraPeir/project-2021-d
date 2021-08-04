import React from "react"
import Form from '../Form'

function Modal({id, task, body, isDone, target, isToEditTask}) {
    return (
        <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{
                            isToEditTask ? 'Edit the task' : 'Create a new task'
                        }</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Save"></button>
                    </div>
                    <div className="modal-body">
                        <Form 
                            task={task}     
                            body={body} 
                            id={id}
                            isDone={isDone}
                            isToEditTask={isToEditTask}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal


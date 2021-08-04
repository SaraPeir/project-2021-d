import React from "react"
import Form from '../Form'
import EDIT_TASK from '../../graphql/mutations/editTask'
import CURRENT_TASK from '../../graphql/queries/task'
import { useMutation } from "@apollo/client";

function Modal({id, task, body, isDone}) {

    return (
        <div className="modal fade" id={`modal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Save"></button>
                    </div>
                    <div className="modal-body">
                        <Form 
                            task={task}     
                            body={body} 
                            id={id}
                            isDone={isDone}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal


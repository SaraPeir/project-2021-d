import React from "react"

function ModalButton({id}) {
    return (
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal-${id}`}>
           Edit
        </button>
    )
}

export default ModalButton
import React from "react"

function ModalButton({target, text}) {
    return (
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={target}>
           {text}
        </button>
    )
}

export default ModalButton
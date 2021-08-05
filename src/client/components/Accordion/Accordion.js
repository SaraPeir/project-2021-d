import React from 'react'

const Item = ({label, parentId, target, id, buttonContent, body}) => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id={`${label}-${id}`}>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${target}-${id}`} aria-expanded="true" aria-controls={`${target}-${id}`}>
                {buttonContent}
            </button>
            </h2>
            <div id={`${target}-${id}`} class="accordion-collapse collapse show" aria-labelledby={`${label}-${id}`} data-bs-parent={`#${parentId}`}>
            <div class="accordion-body">
                {body}
            </div>
            </div>
        </div>
    )
}

const Accordion = ({label, parentId, target, n, buttonContents, bodyContents}) => {

    const items = [];

    for (let i = 1; i <= n; i++) {
        items.push(<Item id={i} key={i} label={label} parentId={parentId} target={target} buttonContent={buttonContents[i-1]} body={bodyContents[i-1]} />);
    }

    return (
        <div class="accordion" id={parentId}>
            {items}
        </div>
    )
}
export default Accordion;
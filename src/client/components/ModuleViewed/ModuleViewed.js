import React from "react"
import VisibilitySensor from 'react-visibility-sensor';

const ModuleViewed = ({children}) => {
    const onChange = (isVisible) => () => console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    return (
        <VisibilitySensor onChange={onChange}>
            {children}
        </VisibilitySensor>
    )
}

export default ModuleViewed


import React from 'react'

const Card = ({ children, title }) => {
    return (
        <div className={`card ${title.split(' ')[0]}`}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default Card

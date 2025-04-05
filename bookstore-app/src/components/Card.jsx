import React from 'react'

const Card = ({ title, author, price }) => {
    return (
        <div>
            <p>{title}, {author}, {price}</p>
        </div>
    )
}

export default Card
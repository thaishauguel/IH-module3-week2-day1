import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            <h1>You are lost, go back to: </h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound

import React from 'react'
import {Link} from 'react-router-dom'

const NavMain = () => {
    return (
        <div>
            <Link to="/">Home</Link >
            <Link to="/paintings/list">All Paintings </Link >
            <Link to="/paintings/create">Create Painting</Link >

        </div>
    )
}

export default NavMain

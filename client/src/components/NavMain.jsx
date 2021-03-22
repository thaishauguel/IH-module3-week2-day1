import React from 'react'
import {Link} from 'react-router-dom'

const NavMain = () => {
    return (
        <div style={{ height: 70, backgroundColor:"lightblue" ,borderBottom:"1px solid darkgrey",   boxShadow: "2px 2px 10px 0 #EEE",
    display:"flex", justifyContent:'space-evenly', alignItems: "center"}}>
            <Link style={{textDecoration: "none", color:"white"}} to="/">Home</Link >
            <Link style={{textDecoration: "none", color:"white"}} to="/paintings/list">All Paintings </Link >
            <Link style={{textDecoration: "none", color:"white"}}  to="/paintings/create">Create Painting</Link >

        </div>
    )
}

export default NavMain

import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";
import axios from 'axios'


class Form extends Component {
    state={ 
        // redirect: null,
        title: "",
        artist: "",
        yearOfDate:0,
        gallery: "",
        image: "" 
    }

    boxbutton={
        padding: "10px", 
        border:"1px solid darkgrey", 
        boxShadow: "2px 2px 10px 0 #EEE", 
        textDecoration: "none",
        backgroundColor: "#FAFAFA",
        color: "#282c34",
        borderRadius: 10,
        fontSize: 20,
        margin: 5,
    width: 90}

    HandleClick = (event) => {
        event.preventDefault()

        axios.post("http://localhost:4000/api/paintings", {
            title: this.state.title,
        artist: this.state.artist,
        yearOfDate:this.state.yearOfDate,
        gallery: this.state.gallery,
        image: this.state.image })
        .then(() => {
        console.log(this.props)
        this.props.history.push('/paintings/List')})
        .catch ((err) => console.log(err))

    }

    HandleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value });

    }

    render(){
        console.log('coucou')
        if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return(
            <form onSubmit = {this.HandleClick } >
                <label htmlFor="title">Title</label>
                <input style={this.boxbutton} id="title" onChange={this.HandleChange} value={this.state.title} name="title" type="text"/>
                <label htmlFor="artist">Artist</label>
                <input style={this.boxbutton} id="artist" onChange={this.HandleChange} value={this.state.artist} name="artist" type="text"/>
                <label htmlFor="gallery">Gallery</label>
                <input style={this.boxbutton} id="gallery" onChange={this.HandleChange} value={this.state.gallery} name="gallery" type="text"/>
                <label htmlFor="yearOfDate">year date</label>
                <input style={this.boxbutton} id="yearOfDate" onChange={this.HandleChange} value={this.state.yearOfDate} name="yearOfDate" type="number"/>
                <label htmlFor="image">image</label>
                <input style={this.boxbutton} id="image" onChange={this.HandleChange} value={this.state.image} name="image" type="text"/>
                <button style={this.boxbutton} >Submit</button>
            </form>
                )
    }
    
}

export default withRouter(Form)

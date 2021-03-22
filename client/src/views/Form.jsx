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

    HandleClick = (event) => {
        event.preventDefault()
        // this.props.callback({
        //     title: this.state.title,
        // artist: this.state.artist,
        // yearOfDate:this.state.yearOfDate,
        // gallery: this.state.gallery,
        // image: this.state.image })

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
                <input id="title" onChange={this.HandleChange} value={this.state.title} name="title" type="text"/>
                <label htmlFor="artist">Artist</label>
                <input id="artist" onChange={this.HandleChange} value={this.state.artist} name="artist" type="text"/>
                <label htmlFor="gallery">Gallery</label>
                <input id="gallery" onChange={this.HandleChange} value={this.state.gallery} name="gallery" type="text"/>
                <label htmlFor="yearOfDate">year date</label>
                <input id="yearOfDate" onChange={this.HandleChange} value={this.state.yearOfDate} name="yearOfDate" type="number"/>
                <label htmlFor="image">image</label>
                <input id="image" onChange={this.HandleChange} value={this.state.image} name="image" type="text"/>
                <button>Submit</button>
            </form>
                )
    }
    
}

export default withRouter(Form)

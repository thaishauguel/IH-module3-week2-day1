import React, { Component } from 'react'
import axios from 'axios'

export default class Update extends Component {
state={
    
    title: "",
    artist: "",
    yearOfDate:0,
    gallery: "",
    image: ""
}

    componentDidMount = () => {
        // console.log(this.props.match)
        axios.get(`http://localhost:4000/api/paintings/${this.props.match.params.id}`)
        .then((painting) => {
            this.setState({ 
                title: painting.data.title,
            artist: painting.data.artist,
            yearOfDate:painting.data.yearOfDate,
            gallery: painting.data.gallery,
            image: painting.data.image 
            })
        })
        .catch((err) => console.log(err))
    }

    HandleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value });

    }

    HandleClick=(event)=>{
        event.preventDefault()

        axios.patch(`http://localhost:4000/api/paintings/${this.props.match.params.id}`, {
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
    render() {
        return (
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

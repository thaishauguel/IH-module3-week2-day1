import React from 'react'
import { Component } from 'react'
import axios from 'axios'


class OnePainting extends Component {
    state = {
        onePainting: null
    }
    componentDidMount = () => {
        // console.log(this.props.match)
        axios.get(`http://localhost:4000/api/paintings/${this.props.match.params.id}`)
        .then((painting) => {
            this.setState({ onePainting: painting.data })
        })
        .catch((err) => console.log(err))
    }
    
    render() {
        // console.log('coucou')
        if (!this.state.onePainting) { return <div>Loading...</div> }
        return (
            <div>
                <h1>{this.state.onePainting.title}</h1>
                <h2>{this.state.onePainting.artist}</h2>
                <p>{this.state.onePainting.yearOfDate}</p>
                <p>{this.state.onePainting.gallery}</p>

                <img src={this.state.onePainting.image} alt="" />
            </div>
        )
    }

}

export default OnePainting

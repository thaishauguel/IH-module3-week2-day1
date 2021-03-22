import React from 'react'
import { Component } from 'react'
import axios from 'axios'


class OnePainting extends Component {
    state = {
        onePainting: null
    }
    componentDidMount = () => {

        if (this.props.id){
            axios.get(`http://localhost:4000/api/paintings/${this.props.id}`)
            .then((painting) => {
                this.setState({ onePainting: painting.data })
            })
            .catch((err) => console.log(err))
        
        }
        // console.log(this.props.match)
        else {
            axios.get(`http://localhost:4000/api/paintings/${this.props.match.params.id}`)
        .then((painting) => {
            this.setState({ onePainting: painting.data })
        })
        .catch((err) => console.log(err))
        }
    }
    
    render() {
        // console.log('coucou')
        if (!this.state.onePainting) { return <div>Loading...</div> }
        return (
            <div style={{width: 400, margin: "auto"}}>
                <h1>{this.state.onePainting.title}</h1>
                <h2>{this.state.onePainting.artist}</h2>
                <p>{this.state.onePainting.yearOfDate}</p>
                <p>{this.state.onePainting.gallery}</p>

                <img style={{width: 150}}src={this.state.onePainting.image} alt="" />
            </div>
        )
    }

}

export default OnePainting

import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class List extends Component {
state={
    allPaintings:null
}

HandleDelete=(id)=>{
    axios.delete(`http://localhost:4000/api/paintings/${id}`)
    
    .then((deletedId)=> {
        const updatedArr=[...this.state.allPaintings.filter( (element) => deletedId.data._id !== element._id )]
        console.log(updatedArr)
        this.setState( {allPaintings: updatedArr}) 
    })
    .catch((err)=>console.log(err))
}

HandleUpdate=(id)=>{
    // axios.patch(`http://localhost:4000/api/paintings/${id}`)
    // .then(()=>console.log('has been updated'))
    // .catch((err)=>console.log('err'))
}

    componentDidMount=()=>{
        axios.get("http://localhost:4000/api/paintings")
        .then((paintings)=>{
            console.log(paintings)
            return this.setState({allPaintings: paintings.data})})
        .catch(err=>console.log(err))
    }

    // componentDidUpdate=(prevProps,prevState)=>{
    // if (this.state.boolean !== prevState.boolean) {
    //     axios.get("http://localhost:4000/api/paintings")
    //     .then((paintings)=>this.setState({allPaintings: paintings.data}))
    //     .catch(err=>console.log(err))
        
    //   }}
    
    render() {
        if (!this.state.allPaintings){return <div>Loading...</div>}
        return (
            <div>
                {this.state.allPaintings.map((painting)=>{
                    return <div key={painting._id}> <h2>{painting.title}</h2>
                    <Link to={`/paintings/${painting._id}`}>Click for details</Link>
                    <button onClick={()=>this.HandleDelete(painting._id)}>Delete</button>
                    <button onClick={()=>this.HandleUpdate(painting._id)}>Update</button>

                    </div>
                    
                })}
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// export default class List extends Component {
// state={
//     allPaintings:null,
//     boolean:false
// }

// HandleClick=(id)=>{
//     axios.delete(`http://localhost:4000/api/paintings/${id}`)
//     .then(()=>this.setState({boolean : !this.state.boolean}))
//     .catch((err)=>console.log('err'))
// }

// // componentDidUpdate=(prevProps,prevState)=>{
// //     if (this.state.boolean !== prevState.boolean) {
// //         axios.get("http://localhost:4000/api/paintings")
// //         .then((paintings)=>this.setState({allPaintings: paintings.data}))
// //         .catch(err=>console.log(err))
        
// //       }



// // }
        
//     componentDidMount=()=>{
//         axios.get("http://localhost:4000/api/paintings")
//         .then((paintings)=>this.setState({allPaintings: paintings.data}))
//         .catch(err=>console.log(err))


//     }

    
//     render() {
//         if (!this.state.allPaintings){return <div>Loading...</div>}
//         return (
//             <div>
//                 {this.state.allPaintings.map((painting)=>{
//                     return <div key={painting._id}> <h2>{painting.title}</h2>
//                     <Link to={`/paintings/${painting._id}`}>Click for details</Link>
//                     <button onClick={()=>this.HandleClick(painting._id)}>Delete</button>
//                     </div>
                    
//                 })}
//             </div>
//         )
//     }
// }

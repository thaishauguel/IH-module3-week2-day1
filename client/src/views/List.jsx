import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import OnePainting from './OnePainting'

export default class List extends Component {
state={
    allPaintings:null,
    boolean: false,
    _id:null
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
width: "fit-content"}

popup={
    textAlign:"center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex : 10, 
    border:"1px solid darkgrey ", 
    boxShadow: "2px 2px 10px 0 #EEE", 
    textDecoration: "none",
    backgroundColor: "lightblue",
    width: 550, 
    height: 550
}

clickOpenWindow=()=>{
    console.log('clicked')
    this.setState({boolean: !this.state.boolean, _id: ""})

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



HandleClickOnButton=(id)=>{
this.setState({boolean: !this.state.boolean, _id: id})
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
            <div style={{position: "relative"}}>
                {this.state.allPaintings.map((painting)=>{
                    return <div key={painting._id}> <h1>{painting.title}</h1>
                    {/* <Link style={this.boxbutton} to={`/paintings/${painting._id}`}>Click for details</Link> */}
                    <button style={this.boxbutton} onClick={()=>this.HandleClickOnButton(painting._id)}>Click here for details</button>
                    <button style={this.boxbutton} onClick={()=>this.HandleDelete(painting._id)}>Delete</button>
                    <Link style={this.boxbutton} to={`/paintings/update/${painting._id}`}>Update</Link>
                    </div>
                    
                })}
                
                 {this.state.boolean && 
                 <div onClick={this.clickOpenWindow} style={this.popup}>
                     <OnePainting  id={this.state._id}/>
                     <div style={{position: "absolute", top:0, right: 0, fontWeight: "bold"}} onClick={this.clickOpenWindow}>X</div>
                </div>}
                
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

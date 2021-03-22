
import React from 'react';
import axios from 'axios'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavMain from './components/NavMain';
import Home from './views/Home';
import List from './views/List';
import Form from './views/Form';
import OnePainting from './views/OnePainting';
import NotFound from './views/NotFound';


class App extends React.Component {

  // getNewPainting = (input) => {
  //   axios.post("http://localhost:4000/api/paintings", input)
  //     .then(() => {
  //       console.log(this.props)
  //       this.props.history.push('/paintings/List')})
  //   .catch ((err) => console.log(err))
  // }

  render(){
    return (
      <div className="App">
        <NavMain />

        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/paintings/list' component={List}/>
        <Route 
        exact path='/paintings/create' 
        render={() => {
          return <Form callback={this.getNewPainting}/>} }/>
        <Route exact path='/paintings/:id' component={OnePainting}/>
        <Route  path='/*' component={NotFound}/>
        
  
        </Switch>
  
  
      </div>
    );
  }
  
}

export default App;

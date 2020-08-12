import React from 'react';
import './App.css';
import axios from "axios";
import Profile from "./components/Profile";
import Followers from "./components/Followers";

class App extends React.Component {
   constructor() {
   super();
    this.state = { 
      data: [],
      followers: []
     }
  }

  componentDidMount() {
      //Fetching user api
    axios.get("https://api.github.com/users/mrbhawnish")
      // .then(res => console.log(res.data))
      .then(res => {
         this.setState({ data: [res.data] })
        
          })
      .catch(err => console.log(err))

      axios.get("https://api.github.com/users/mrbhawnish/followers")
      .then( res => {
        this.setState({followers: [res.data]})
        
      })
      .catch(err => console.log("error from fetching followers", 
      err))
    }

  render() {
  return (
    <div className="App">
      <Profile data={this.state.data}></Profile>
      <Followers followers={this.state.followers}></Followers>
    </div>
   );
  }
}

export default App;

import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import React, { useState, useEffect,} from 'react'
import Home from "./Components/home";
import About from "./Components/about";
import Dislikes from "./Components/dislikes";
import Likes from "./Components/likes";
import NoPage from "./Components/NoPage";
import Users from './Components/users';



class ErrorBoundary extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
 
  }
 
  render() {
    if (this.state.errorInfo) {
 
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}


function App() {

  
    return (
    <ErrorBoundary> 
    <div className="app" >
    <nav className="navbar">
       <Link className="home" to="/">Home</Link>
       <Link className="about" to='/about'>About</Link>
       <Link className="users" to='/users'>Users</Link>
    </nav>
     
    <Routes className= "app-route">
     <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" > 
        <Route  index element = {<About/>} />
        <Route path = "likes" element = {<Likes/>}/>
        <Route path = "dislikes" element = {<Dislikes/>}/>
      </Route>
      <Route path = '/users' element = {<Users />} />
       <Route path="*" element={<NoPage />} />
       </Routes>
    
    </div>
    </ErrorBoundary>
   ) 
}
export default App;
import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


export default class App extends Component {
  pageSize=12;
  
  apiKey='9d39bd2103e14d7bb4e06379ece8c5c0'
  // apiKey=process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
      <Route exact path="/" element = {<News key='general' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "general"/>}/>
      <Route exact path="/business" element = {<News  key='business' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "business"/>}/>
      <Route exact path="/entertainment" element = {<News  key='entertainment' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "entertainment"/>}/>
      <Route exact path="/general" element = {<News  key='general' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "general"/>}/>
      <Route exact path="/health" element = {<News key='health' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "health"/>}/>
      <Route exact path="/science" element = {<News  key='science' pageSize = {this.pageSize} apiKey={this.apiKey}  country = "in" category = "science"/>}/>
      <Route exact path="/sports" element = {<News  key='sports' pageSize = {this.pageSize} apiKey={this.apiKey}  country = "in" category = "sports"/>}/>
      <Route exact path="/technology" element = {<News key='technology' pageSize = {this.pageSize} apiKey={this.apiKey} country = "in" category = "technology"/>}/>
          </Routes>
        
        </Router>
      </div>
    )
  }
}



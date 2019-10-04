import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import CreateAPost from './components/CreateAPost';
import ShowCurrentPosts from './components/ShowCurrentPosts';
import blog from './blog.png'


export default class App extends React.Component {
  state={
    text: "",
    title: "",
    content: "",
    showResult: [],
    time: '',
  }
  


  componentDidMount(){
    this.getDate()
  }

  getDate =()=>{
    let date = new Date().toLocaleString()
    this.setState({
      time:date
    })
  }


 /*  handleChange =(a,b,c) => {
    this.setState({
      text: a,
      title: b, 
      content: c
    });
  } */

  handleSubmit =(a,b,c) => {
    //event.preventDefault();
    let post = {
      title: a,
      text: b,
      content: c,
    };
    console.log(post);
    
    this.setState({
      showResult: [...this.state.showResult, post]
    });
  };
  render(){
  return (
    <Router>
    <section>
   
      <nav>
      <div className="nav-wrapper color">
        
      <img src={blog} alt="bolg post" />
      <ul id="nav-mobile" className="right  ">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to ="CreateAPost" className="link">Create A Post</Link></li>
        <li><Link to="ShowCurrentPosts" className="link">Show Current Posts</Link></li>
        </ul>
      </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} /* text={this.state.text} */ />
        <Route path="/CreateAPost" render={()=> <CreateAPost handleSubmit={this.handleSubmit} />} />
        <Route path="/ShowCurrentPosts" render= {()=> <ShowCurrentPosts arr={this.state.showResult} calender={this.state.time} />} />

        </Switch>
    </section>
   
    </Router>
  )
}
}

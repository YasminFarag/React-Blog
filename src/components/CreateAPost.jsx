import React, { Component } from "react";
//import ShowCurrentPosts from "./ShowCurrentPosts";

class CreateAPost extends Component {
    // console.log(text);
  render() {
    console.log(this.props);
    
    return (
      <section className="form">
        
          <label>
            UserName:
            <input  type="text" ref="txt" /*  text={this.state.text} */ />  
          </label>
          <br />

          <br />
          <label>
            Title:
            <input type="text" ref="tit" /* title={this.state.title} */ />
          
          </label>
          <br />

          <br />

          <label className="box">
            Content:
            <textarea type="text" ref="con" /* content={this.state.content} */ />
          </label>
          <br />
          <button type="button" onClick={()=> this.props.handleSubmit(this.refs.txt.value,this.refs.tit.value,this.refs.con.value)}>
            Creat Post
          </button>
        
      </section>
    );
  }
}

export default CreateAPost;

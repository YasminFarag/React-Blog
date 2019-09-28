import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';



class Home extends Component {

    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
                console.log(res);
                
                this.setState({
                    posts:res.data.slice(0,2)
                })
                
            }) 
            // create programmatic redirects

            // setTimeout((props) => {
            //     props.history.push('/createAPost')
                
            // }, 3000);
    
    }

    componentWillMount(){
        
    }
    render() {

        const listData=  this.state.posts.length ? (
            this.state.posts.map(post=>{
                return(

                  
                <div className='post card ' key={post.id}>
                   
                <div className="card-content">
                    <div className="card-title coloring">{post.title}</div>
                    <p>{post.body}</p>
                </div>
                </div>
            
            )
            })
            
        ) :(
            <div className="center">No Current Posts</div>
         
        )
        return (
            <main>
                <p className='paragraph'>Welcome to our blog site</p>
                    {listData}
            </main>
        )
    }
}

export default withRouter(Home)

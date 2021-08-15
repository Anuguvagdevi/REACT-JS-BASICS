import React, { Component } from 'react';

//======================>Class Component<=================

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message: 'Welcome Vagdevi'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank You for subscribing'
        })
    }

    render() {
        return(
             <div>
             <h1>{this.state.message} </h1> 
             <button onClick={()=> this.changeMessage()}>Subscribe</button>
             </div>
        ) 
    }
}
export default Message
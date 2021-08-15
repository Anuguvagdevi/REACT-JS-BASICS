import React, { Component } from 'react'

 class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
     return this.state.isLoggedIn && <div>Welcome Vagdevi</div>

//====================>Conditional Operator<============
        // return this.state.isLoggedIn? (
        //     <div> Welcome Vagdevi</div> 
        //     ):(
        //     <div>Welcome Guest</div>
        //     )
        

//==================>if else<===============
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Vagdevi</div>
        //  } else{
        //         message=<div>Welcome Guest</div>
        //     }
        
        //  return<div>{message}</div>
//===========>if else<=====================
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Vagdevi</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        // <div>
        //     <div> Welcome Vagdevi</div>
        //     <div>Welcome Guest</div>
        // </div>
        // )
   // }
}
}
export default ConditionalRendering


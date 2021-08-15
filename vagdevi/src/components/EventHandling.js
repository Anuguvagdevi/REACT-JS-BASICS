import React, { Component } from 'react'
//import React , from 'react'

//===============>Function<=====================
// function EventHandling() {
//     function clickHandler(){
//         console.log('Button clicked')
//     }
//     return (
//         <div>
//            <button onClick={clickHandler}>Click </button>
//         </div>
//     )
// }

//==================>Class Component<==========

// class EventHandling extends Component{
//     clickHandler(){
//         console.log('clicked the button')
//     }
//  render(){
//     return (
//         <div>
//             <button onClick={this.clickHandler}>Click me </button>
//         </div>
//     )
//    }
// }

//======================>Event Bind<===============

export class EventHandling extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        //best approach
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }
    clickHandler=()=>{
        this.setState({
            message:'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandle}>Click</button>

            </div>
        )
    }
}



export default EventHandling

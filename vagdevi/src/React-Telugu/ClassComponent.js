import React, { Component } from 'react'

 class ClassComponent extends Component {
     state={
         name : "vagdevi"
     }
    render() {
        return (
            <div>
                <h2>Welcome to {this.state.name}</h2>
            </div>
        )
    }
}
export default ClassComponent

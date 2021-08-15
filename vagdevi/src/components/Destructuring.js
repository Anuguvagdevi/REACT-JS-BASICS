import React, {Component } from 'react'
//import React from 'react'

//=============>functional components<===============
//====>1.Destructuring in the parameters<=====
// const Destructuring =({name,fullName})=>{
//     return(
//         <div>
//             <h1>
//                 Hello {name}==={fullName}
//             </h1>
//         </div>
//     )
// }

//===>2.Destructuring in Function Body<=====
// const Destructuring=props=>{
//     const{name,fullName}=props
//     return(
//         <div>
//             <h1>
//                 Hello {name}=={fullName}
//             </h1>
//         </div>
//     )
// }
//==================>Class components<==================
//
class Destructuring extends Component{
    render(){
    const {name,fullName}=this.props
    return (
        <h1>
        Welcome {name}=={fullName}
        </h1>
    )
    }
}
export default Destructuring
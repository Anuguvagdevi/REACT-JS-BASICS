import React from 'react'
import './myStyles.css'

//====================>Inline Styling<================
// function StyleSheet(props) {
//     let className =props.primary?'primary': ' '
//     return (
//         <div>
//            <h1 className={`${className}font-xl`}> StyleSheets</h1>
//         </div>
//     )
// }

const heading={
    fontsize: '72px',
    color: 'blue'
}
function StyleSheet(){
    return(
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}
export default StyleSheet

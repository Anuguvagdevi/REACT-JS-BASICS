import React from 'react'

const Hello=() => {
    //------->Using JSX<--------------
    // return(
    //     <div className='dummyClass>
    //         <h1> Hello Devi </h1>
    //     </div>
    // )
 
   //------------->Using JS<------------
    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'}, 
        React.createElement('h1',null,'Hello Devi')
        )
}

export default Hello
import React from 'react'
//import Person from './Person'

function NameList() {
    const names=['Vagdevi','Hari','Madhu','Vagdevi']
   //const persons= [
        const nameList=names.map((name,index)=> <h2> key={index}  {name}</h2>)
        return <div>{nameList}</div>
    
    // const persons=[
    //     {
    //         id: 1,
    //         name: 'Vagdevi',
    //         age: 23 ,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Hari',
    //         age: 29 ,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Madhu',
    //         age: 26 ,
    //         skill: 'Vue'          
    //      }
    //     ]
        
    
    // const nameList = persons.map(person =>(
    // <h2>
    //     I am {person.name}.I am {person.age} years old.I Know {person.skill}
    //     </h2>
    //     ))//
    // return <div>{nameList}</div>
}

export default NameList

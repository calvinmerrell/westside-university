import React from 'react'
import {Link} from 'react-router-dom'



const NotFound = (props)=>{
    return (
        <div>
        <h1> Page could not be found </h1>

        <Link to='/classlist'>Maybe Check out the Clas List</Link>
        </div>
    )
}

export default NotFound
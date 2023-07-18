import React from 'react'
import './Results.css'

const Result = ({ result }) => {
    return (
        <div className='_searchResult'>
            {result.name}
        </div>
    )
}

export default Result

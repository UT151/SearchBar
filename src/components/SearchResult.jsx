import React from 'react'
import './_searchResult.css'
import Results from './Results'

//the component takes result as prop and render it
const SearchResult = ({ result }) => {
    return (
        <div className='_results'>
            {result.map((result, id) => {
                return <Results result={result} key={id} />
            })}
        </div>
    )
}

export default SearchResult

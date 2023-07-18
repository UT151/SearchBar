import React, { useState } from 'react'
import './_searchBar.css'
import { FcSearch } from "react-icons/fc"
// importing flat color icons from react icons library

const SearchBar = ({ setResult }) => {
    //to store the input values typed
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => (response.json()))
            // .then(json => { console.log(json) })
            // filtering the data acc to what amtches the i/p value
            .then((json) => {
                const result = json.filter((user) => {
                    return (user && user.name && user.name.toLowerCase().includes(value))
                })
                console.log(result)
                setResult(result)
            })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='_inputBar'>
            <FcSearch id='_searchIcon' />
            {/* <input type="text" placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} /> */}
            <input type="text" placeholder='Search' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar

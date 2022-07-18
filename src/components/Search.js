import React, { useState } from 'react'
import { Users } from './../users'

const Search = () => {
    const [query, setQuery] = useState("")
    return (
        <div>
            <h3>Search users</h3>
            <input type="text" placeholder='type a name' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <button>Search</button>
            {Users.filter((user) => { return user.first_name.toLowerCase().includes(query) }).map(item => {
                return <ul><li key={item.id}>{item.first_name}</li></ul>
            })}
        </div>
    )
}

export default Search
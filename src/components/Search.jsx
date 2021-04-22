import React from 'react'

import '../assets/styles/components/Search.scss'

let main_title_text = 'What do u wanna see?'
const Search = () => (
    <section className="main">
        <h2 className="main__title">{main_title_text}</h2>
        <input type="text" placeholder="Search..." className="input"/>
    </section>
)

export default Search
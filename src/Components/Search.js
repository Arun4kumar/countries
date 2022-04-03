import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white dark:bg-dbe flex rounded-md items-center w-full px-8 py-4 md:w-6/12 shadow-md">
            <FaSearch
                onClick={props.onClick}
                className="text-xl text-dgi mr-8"
            />
            <input
                ref={ref}
                className="outline-none dark:bg-dbe font-semibold text-dgi  w-full "
                placeholder="Search for a country.."
            ></input>
        </div>
    )
})

export default Search

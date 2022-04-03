import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const Select = ({ setSelected, selected }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <div className="relative">
            <div
                onClick={() => setVisible((prev) => !prev)}
                className="pl-8 mt-6 md:mt-0 pr-2 py-4 text-vdb flex items-center justify-between cursor-pointer dark:bg-dbe dark:text-white  bg-white font-semibold shadow-md rounded-md"
            >
                {selected ? selected : 'Filter by Region'}
                <FaArrowRight
                    className={`${
                        isVisible && 'rotate-90'
                    } text-vdb ml-4 ease-in duration-200`}
                />
            </div>
            <div
                className={
                    isVisible
                        ? ' mt-2 py-2 w-full overflow-hidden dark:bg-dbe dark:text-whitet ease-in duration-100 text-vdb flex-column items-center justify-between cursor-pointer bg-white font-semibold shadow-lg rounded-md absolute z-10'
                        : 'hidden ease-in duration-100'
                }
            >
                {regions.map((region, index) => (
                    <p
                        onClick={() => setSelected(region)}
                        className="px-8 py-1 hover:bg-dgi hover:text-white dark:hover:bg-vdbbg"
                    >
                        {region}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Select

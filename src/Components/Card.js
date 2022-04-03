import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ source, population, name, region, capital }) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/${name}`)}
            className="bg-white dark:bg-dbe md:max-w-xs shadow-md rounded-lg overflow-hidden"
        >
            <div className="shrink-1">
                <img className="w-full" src={source} alt={name} />
            </div>
            <div className="p-6 mb-4 ">
                <div className="my-4  font-semibold text-vdbt dark:text-white text-xl">
                    {name}
                </div>
                <p className="dark:text-vlgbg">
                    <span className="font-semibold ">Population</span>:{' '}
                    {population}
                </p>
                <p className="dark:text-vlgbg">
                    <span className="font-semibold">Region</span>: {region}
                </p>
                <p className="dark:text-vlgbg">
                    <span className="font-semibold">Capital</span>: {capital}
                </p>
            </div>
        </div>
    )
}

export default Card

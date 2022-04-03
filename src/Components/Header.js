import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import context from '../store'
const Header = () => {
    const ctx = useContext(context)
    const navigate = useNavigate()
    return (
        <div className="bg-white dark:bg-dbe dark:text-white box-border flex justify-between px-4 md:px-8 py-8 shadow-md">
            <div
                onClick={() => navigate('/')}
                className="font-bold cursor-pointer"
            >
                Where in the World?
            </div>

            <div
                onClick={() => ctx.change()}
                className="flex items-center cursor-pointer"
            >
                {!ctx.dark ? (
                    <FaMoon color="text-white" />
                ) : (
                    <FaSun color="orange" />
                )}
                <div className={`mx-3 font-light text-vdbt dark:text-white`}>
                    {ctx.dark ? 'Light Mode' : 'Dark Mode'}
                </div>
            </div>
        </div>
    )
}

export default Header

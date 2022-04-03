import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={
                'px-6 py-1 rounded-md border-1 cursor-pointer shadow-md dark:bg-dbe dark:text-white  max-w-fit dark:bg'
            }
        >
            {children}
        </div>
    )
}

export default Button

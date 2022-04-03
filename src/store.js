import React, { useState } from 'react'
const context = React.createContext({
    dark: false,
    change: () => {},
})
export const ContextProvider = (props) => {
    const [dark, setDark] = useState(false)
    const change = () => {
        setDark((value) => !value)
    }
    console.log(dark)
    return (
        <context.Provider value={{ dark, change }}>
            {props.children}
        </context.Provider>
    )
}
export default context

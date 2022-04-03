import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Single from './Components/Single'
import { useContext, useEffect, useState } from 'react'
import context from './store'
function App() {
    const ctx = useContext(context)
    
    return (
        <div className={`${ctx.dark && 'dark' }`}>
            <div className="bg-vlgbg dark:bg-vdbbg box-border min-h-screen h-full">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:name" element={<Single />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App

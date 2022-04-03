import React, { useState, useEffect, useRef } from 'react'
import Search from './Search'
import Select from './Select'
import Card from './Card'

const Home = () => {
    const [datas, setDatas] = useState()
    const [selected, setSelected] = useState()
    const search = useRef()
    useEffect(() => {
        const test = async () => {
            const res = await fetch(
                `https://restcountries.com/v3.1/region/${
                    selected ? selected : 'asia'
                }`
            )
            const temp = await res.json()
            setDatas(temp)
        }
        test()
    }, [selected])
    const searchFilter = async () => {
        const res = await fetch(
            `https://restcountries.com/v2/name/${search.current.value}`
        )
        const temp = await res.json()
        setDatas(temp)
    }
    return (
        <div className="box-border flex px-8 py-8 md:px-12 justify-between flex-wrap">
            <Search onClick={searchFilter} ref={search} />
            <Select selected={selected} setSelected={setSelected} />
            <div className="grid py-8 px-4 md:px-0 xl:grid-cols-4 md:grid-cols-3 grid-col-1 w-full justify-center grid-flow-row gap-20">
                {datas &&
                    datas.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                name={
                                    typeof data.name === 'string'
                                        ? data.name
                                        : data.name.official
                                }
                                source={data.flags && data.flags.svg}
                                population={data.population}
                                region={data.region}
                                capital={data.capital && data.capital[0]}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Home

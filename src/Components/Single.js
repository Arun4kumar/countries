import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from './Button'

const Single = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const params = useParams()
    useEffect(() => {
        const test = async () => {
            let res = await fetch(
                `https://restcountries.com/v3.1/name/${params.name}`
            )
            let temp = await res.json()

            if (temp[0] === undefined) {
                res = await fetch(
                    `https://restcountries.com/v2/alpha/${params.name}`
                )
                temp = await res.json()

                if (temp.status) {
                    return
                }

                navigate(`/${temp.name}`)
            }
            setData(temp[0])
        }
        test()
    }, [params])
    console.log(data)
    return (
        <div className="box-border px-4 md:px-24 dark:text-whitet">
            <div className="my-8 md:my-12">
                <Button onClick={() => navigate(-1)}>{'<-Back'}</Button>
            </div>
            <div className="flex flex-col items-start md:flex-row md:justify-between gap-8 md:gap-24">
                {data && (
                    <div className="md:w-6/12">
                        <img
                            className={'md:shadow-md'}
                            src={data.flags.svg}
                            alt="image"
                        />
                    </div>
                )}

                {data && (
                    <div className="md:w-6/12">
                        <div className="text-4xl font-semibold py-4">
                            {data.name.common}
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="w-full md:w-6/12">
                                <p className="my-2">
                                    <strong>Native Name</strong>:{' '}
                                    {data.name.common}
                                </p>
                                <p className="my-2">
                                    <strong>Population</strong>:{' '}
                                    {data.population}
                                </p>
                                <p className="my-2">
                                    <strong>Region</strong>: {data.region}
                                </p>
                                <p className="my-2">
                                    <strong>Sub Region</strong>:{' '}
                                    {data.subRegion}
                                </p>
                                <p className="my-2">
                                    <strong>Capital</strong>: {data.capital[0]}
                                </p>
                            </div>
                            <div className="w-full md:w-6/12 mt-8 sm:mt-0">
                                {' '}
                                <p className="my-2">
                                    <strong>Top Level Domain</strong>:{' '}
                                    {data.tld[0]}
                                </p>
                                <p className="my-2">
                                    <strong>Currencies</strong>:{' '}
                                    {Object.values(data.currencies).map(
                                        (item) => (
                                            <span>
                                                {item.name} {item.symbol}
                                            </span>
                                        )
                                    )}
                                </p>
                                <p className="my-2">
                                    <strong>Languages</strong>:{' '}
                                    {Object.values(data.languages).map(
                                        (item) => (
                                            <span className="mx-1">{item}</span>
                                        )
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 ">
                            <strong className="w-full">Border Countries</strong>
                            {Object.values(data.borders).map((item) => (
                                <Button onClick={() => navigate(`/${item}`)}>
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Single

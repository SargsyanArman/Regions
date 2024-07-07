import React, { useEffect, useState } from 'react'
import RegionsItem from './RegionsItem'

const Regions = ( {countryNameSearch,languageValue} ) => {
    const [data,setData] = useState(null)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(regions => {
                setData(regions)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
  return (
    <div className='pt-8 bg-gray-400'>
        <RegionsItem dataRegions={data} countryNameSearch={countryNameSearch} languageValue={languageValue}/>
    </div>
  )
}

export default Regions
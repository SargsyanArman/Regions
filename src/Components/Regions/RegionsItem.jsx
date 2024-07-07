import React, { useState } from 'react';
import RegionInfo from './RegionInfo';

const RegionsItem = ({ dataRegions, countryNameSearch ,languageValue }) => {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 10;

    if (!dataRegions) {
        return <p>Loading...</p>;
    }
console.log(languageValue);
    const filteredItems = dataRegions.filter(item =>
        item.name.common.toLowerCase().includes(countryNameSearch.toLowerCase())
    );

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = index * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDataRegions = filteredItems.slice(startIndex, endIndex);

    const handlePrev = () => {
        setIndex((index - 1 + totalPages) % totalPages);
    };

    const handleNext = () => {
        setIndex((index + 1) % totalPages);
    };

    const infoRegion = ['Flag', 'Country', 'Capital', 'Region', 'Subregion', 'Language', 'Independent', 'Area'];

    return (
        <div className='flex flex-col items-center'>
            <div className='bg-white w-[80%] rounded-lg shadow-md'>
                <div className='w-full bg-[#FAFAFA] h-16 border-b border-b-gray-500 '>
                    <RegionInfo infoRegion={infoRegion} />
                </div>
                <ul className=''>
                    {currentDataRegions.map((item, id) => (
                        <li key={id} className='flex justify-between py-4 pl-[2rem] pr-[3rem] border-b border-b-gray-500'>
                            <img src={item.flags.png} alt={item.capital} className='w-[50px] h-[30px] flex-shrink-0' />
                            <span className='flex-1 text-center ml-14 mr-[13px]'>{item.name.common}</span>
                            <span className='flex-1 text-center'>{item.capital}</span>
                            <span className='flex-1 text-center'>{item.continents}</span>
                            <span className='flex-1 text-center'>{item.subregion}</span>
                            <span className='flex-1 text-center'>{item.languages && Object.values(item.languages)[0]}</span>
                            <span className='flex-1 text-center'>{item.independent ? 'Yes' : 'No'}</span>
                            <span className='flex-1 text-center'>{item.area}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-between mt-4 mb-4'>
                <button 
                    className='bg-gray-300 p-2 rounded-md mr-4 disabled:opacity-50' 
                    onClick={handlePrev} 
                    disabled={index === 0}
                >
                    Prev
                </button>
                <span className='text-lg font-bold pt-2'>{index + 1}</span>
                <button 
                    className='bg-gray-300 p-2 rounded-md ml-4 disabled:opacity-50' 
                    onClick={handleNext} 
                    disabled={totalPages - 1 === index}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default RegionsItem;

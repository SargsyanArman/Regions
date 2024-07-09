import React, { useMemo, useRef, useState } from 'react';
import RegionInfo from './RegionInfo';
import { Button } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const RegionsItem = ({ dataRegions, countryNameSearch, languageValue, regionValue }) => {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 10;
    
    const filteredItems = useMemo(() => {
        if (!dataRegions) return [];

        console.log('update');
        return dataRegions.filter(item => {
            const matchByLanguage = item.languages && Object.values(item.languages)[0].toLowerCase().includes(languageValue.toLowerCase());
            const matchByCountryName = item.name.common.toLowerCase().includes(countryNameSearch.toLowerCase());
            const matchByRegion = item.region.toLowerCase().includes(regionValue.toLowerCase());
            return matchByCountryName && matchByLanguage && matchByRegion;
        });
    }, [dataRegions, languageValue, regionValue, countryNameSearch]);
    
    if (!dataRegions) {
        return (
            <div className="loading-container flex justify-center">
                <Spin indicator={<LoadingOutlined spin />} size="large" />
            </div>
        );
    }
    
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

    const infoRegion = ['Flag', 'Country', 'Capital', 'Region', 'Currency', 'Language', 'Independent', 'Area'];

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
                            <span className='flex-1 text-center'>{item.continents.join(' ')}</span>
                            <span className='flex-1 text-center'>
                                {item.currencies && [(Object.values(item.currencies)[0].name), Object.values(item.currencies)[0].symbol].join(" ")}
                            </span>
                            <span className='flex-1 text-center'>{item.languages && Object.values(item.languages)[0]}</span>
                            <span className='flex-1 text-center'>{item.independent ? 'Yes' : 'No'}</span>
                            <span className='flex-1 text-center'>{item.area}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-between my-4'>
                <Button
                    onClick={handlePrev}
                    disabled={index === 0}
                >
                    Prev
                </Button>
                <span className='text-lg font-bold mx-4'>{index + 1}</span>

                <Button type="primary"
                    onClick={handleNext}
                    disabled={totalPages - 1 === index}
                    block
                    className='w-[100px]'
                >
                    NEXT
                </Button>
            </div>
        </div>
    );
}

export default RegionsItem;

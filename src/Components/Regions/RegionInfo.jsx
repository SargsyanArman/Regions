import React from 'react';

const RegionInfo = ({ infoRegion }) => {
    return (
        <div className='flex justify-between text-lg pt-4 pr-12'>
            {infoRegion.map((item) => (
                <span key={item} className='border-r border-r-gray-500 px-4 flex-1 text-center'>{item}</span>
            ))}
        </div>
    );
}

export default RegionInfo;

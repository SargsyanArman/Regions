import React from 'react'
import { Button } from 'antd'

const Header = ({ handleChange, countryNameSearch, searchLanguage, languageValue , searchRegion , regionValue}) => {
    return (
        <div className="p-4 bg-gray-100 shadow-md flex justify-between">
            <div className="w-[75%]">
                <div className="w-full flex space-x-4 mb-4">
                    <div className="relative flex-1">
                        <label htmlFor="country-name" className="block mb-1">Country Common/native and capital name</label>
                        <input
                            type="text"
                            id="country-name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            value={countryNameSearch}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-chevron-down text-gray-500 absolute top-[68%] transform -translate-y-1/2 right-3"></i>
                    </div>
                    <div className="relative flex-1">
                        <label htmlFor="language" className="block mb-1">Language</label>
                        <input
                            type="text"
                            id="language"
                            onChange={searchLanguage}
                            value={languageValue}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <i className="fa-solid fa-chevron-down text-gray-500 absolute top-[68%] transform -translate-y-1/2 right-3"></i>
                    </div>
                    <div className="relative flex-1">
                        <label htmlFor="region" className="block mb-1">Region</label>
                        <input
                            type="text"
                            id="region"
                            onChange={searchRegion}
                            value={regionValue}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <i className="fa-solid fa-chevron-down text-gray-500 absolute top-[68%] transform -translate-y-1/2 right-3"></i>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="relative flex-1 w-[32%]">
                        <label htmlFor="currency" className="block mb-1">Currency</label>
                        <input
                            type="text"
                            id="currency"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <i className="fa-solid fa-chevron-down text-gray-500 absolute top-[68%] transform -translate-y-1/2 right-3"></i>
                    </div>
                    <div className="relative flex-1 w-[32%]">
                        <label htmlFor="timezone" className="block mb-1">Timezone</label>
                        <input
                            type="text"
                            id="timezone"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <i className="fa-solid fa-chevron-down text-gray-500 absolute top-[68%] transform -translate-y-1/2 right-3"></i>
                    </div>
                    <div className="relative flex-1 w-[32%] flex items-center">
                        <label htmlFor="independent" className="block mb-1">Independent</label>
                        <input
                            type="checkbox"
                            id="independent"
                            className="ml-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="self-end">
                <Button type="primary" danger>
                    Cancel all filters
                </Button>
            </div>
        </div>
    )
}

export default Header

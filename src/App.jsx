import { useState } from 'react'
import Header from './Components/Header/Header'
import Regions from './Components/Regions/Regions'

function App() {
  const [searchVal, setSearchVal] = useState('')
  const [searchLanguage, setSearchLanguage] = useState('')
  const [searchRegion, setSearchRegion] = useState('')
  
  const handleChange = (event) => {
    setSearchVal(event.target.value);
  };

  const handleSearchByLangauage = (event) => {
    setSearchLanguage(event.target.value);
  }

  const handleSearchByRegion = (event) => {
    setSearchRegion(event.target.value);
  }



  return (
    <>
      <Header
        handleChange={handleChange} countryNameSearch={searchVal}
        searchLanguage={handleSearchByLangauage} languageValue={searchLanguage}
        searchRegion={handleSearchByRegion} regionValue={searchRegion}
      />
      <Regions countryNameSearch={searchVal} languageValue={searchLanguage} regionValue={searchRegion} />
    </>
  )
}

export default App

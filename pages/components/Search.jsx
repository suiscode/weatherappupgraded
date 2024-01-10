import Image from 'next/image'
import React, { useRef, useState } from 'react'


function Search({location, setLocation,setVisibilty,visibilty, suggestions, selectedSuggestionIndex, setSelectedSuggestionIndex, handleKeyDown}) {



  return (
    <div className={'flex w-[520px] h-[80px] p-[24px] rounded-[48px] shadow-lg gap-4 bg-white absolute top-10 left-[50px]'}>
        <Image
            src='./search.svg'
            width={48}
            height={48}
            alt='searchicon'
            className='cursor-pointer'
        /> 
        <input placeholder='Search' className={'flex outline-none text-[32px]'} 
        value={location}
        onChange={e=>{
          setLocation(e.target.value)
          setVisibilty(true)
          setSelectedSuggestionIndex(-1)
        }}
        onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default Search
import Image from 'next/image'
import React from 'react'

function Search({location, setLocation}) {
  return (
    <div className={'flex w-[520px] h-[48px] rounded-[48px] shadow-lg gap-4 bg-white '}>
        <Image
            src='./search.svg'
            width={48}
            height={48}
            alt='searchicon'
        /> 
        <input placeholder='Search' className={'flex outline-none text-[32px]'} value={location} onChange={e=>setLocation(e.target.value)}/>
    </div>
  )
}

export default Search
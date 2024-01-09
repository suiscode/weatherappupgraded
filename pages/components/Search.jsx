import Image from 'next/image'
import React, { useRef } from 'react'


function Search({location, setLocation,setVisibilty,visibilty}) {
  const value = useRef()
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
        }}
        />
    </div>
  )
}

export default Search
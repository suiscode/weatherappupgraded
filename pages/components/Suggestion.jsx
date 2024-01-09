import Image from 'next/image';
import React from 'react'

function Suggestion({autoData, setLocationToFind,setVisibilty, visibilty, setLocation}) {
    const hasRegion = autoData.some(item => item.place_type.includes('region')) ;
  return (
    <div className={`${autoData.length && visibilty ? 'flex' : 'hidden'} flex-col w-[520px] bg-white bg-opacity-80 absolute z-10 top-[130px] left-[50px] rounded-3xl py-4 px-8`}>
        {autoData.map(item=>{
            if(item.place_type.includes('region')) {
                return(
                    <li key={crypto.randomUUID()} className='flex gap-4'>
                    <Image src='Pin.svg' width={32} height={32} alt='pin'/>
                    <h1  className='text-[28px] cursor-pointer h-[40px] overflow-hidden' onClick={()=>{
                        setLocationToFind(item.text) 
                        setVisibilty(false)
                        setLocation(item.text)
                    }} >{item.place_name}</h1>
                    </li>
                    )
            }
        })}
        {!hasRegion && <p>No results</p>}
    </div>
  )
}

export default Suggestion
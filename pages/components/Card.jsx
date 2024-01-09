import Image from "next/image";
import React from "react";

function Card({dateColor,locationColor, bgSet, image, location, temp, weatherStatus}) {

    const icons =[bgSet?'Home':'HomeWhite','Pin','Heart','User']
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
    const year = date.getFullYear()

    const fullBgColor = bgSet ? 'bg-rgb bg-opacity-75 backdrop-blur-md' : 'whitebg'
    const firstgardient = bgSet ? 'darkgradient' : 'bg-opacity-75'
    const blur = bgSet ? 'blurwhite' : 'blurorange'




  return (
    <div className={`text-black w-[410px] h-[740px] ${fullBgColor}  rounded-[48px] overflow-hidden border-[8px] ${bgSet ? 'border-black' : 'border-white'} border-opacity-20`}>
      <div className={`${firstgardient} h-[504px] px-12 py-10 flex flex-col relative items-center gap-[120px]`}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className={`${dateColor} text-[18px] font-medium`}>{`${month} ${day}, ${year}`}</p>
            <p className={`${locationColor} text-[48px] font-extrabold mt-[-10px]`}>{location}</p>
          </div>
          <Image
            src="./Pin.svg"
            width={32}
            height={32}
            alt="pin"
          />
        </div>
        <div className={`${blur} rounded-full backdrop-blur-3xl w-[120px] h-[120px] blur-[80px]`}></div>
        <Image
          src={image}
          width={264}
          height={264}
          alt="pin"
          className="absolute top-[170px]"
        />
      </div>
      <div className="flex flex-col px-12 mt-[-120px]">
        <h1 className={`${bgSet ? `tempbgdark` : 'tempbgwhite'} text-[144px] font-extrabold`}>{temp}°</h1>

<p className={`text-[24px] font-extrabold ${bgSet ?`text-[#777CCE]` : `text-[#FF8E27]`} mt-[-20px]`}>{weatherStatus[0].main}</p>

      </div>
      <div className="flex justify-between mt-[36px] px-12">
        {icons.map(item=>{
            return(
                <Image
          src={`/${item}.svg`}
          width={32}
          height={32}
          alt="pin"
          key={crypto.randomUUID()}
        />
            )
        })}
      </div>
    </div>
  );
}

export default Card;

import React from 'react'

function Appearance({ data }) {
    return (
        <div className="w-full mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Age:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{data.appearance?.age}</div>
            </div>
            <div className="h-[30px] w-full flex ">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Height:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{data.appearance?.height}</div>
            </div>
            <div className="h-[30px] w-full flex ">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Weight:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{data.appearance?.weight}</div>
            </div>
            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Hair:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{data.appearance?.hair}</div>
            </div>
        </div>
    )
}

export default Appearance
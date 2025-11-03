import React from 'react'

const Login4 = () => {
    return (
        <div className='flex justify-between w-[1440px] h-[807px] bg-[#02004FED]'>
            <img className="w-[500.5px] h-[737.5px] mt-[25.5px] ml-[5.5px]" src="/Polygon1.png" />
            <div className='flex flex-col w-lg h-[361px] mt-8 ml-5'>
                <h1 className='font-bold text-[70px] w-[286px] mt-50 ml-[60px] text-[#FFFFFF80]'>
                    LOGIN</h1>
                <div className='flex flex-col'>
                    <input type="username" className="w-[469.3px] h-[60px] ml-[50px] pl-[50px] font-normal
                opacity-100  text-[#FFFFFF80]  border-[#FFFFFF1A] border border-solid text-[25px]"
                        placeholder='Username' />
                    <input type="password" className="w-[469.31px] h-[60px] mt-10 ml-[50px] font-normal
                opacity-100  text-[#FFFFFF80] border  border-[#FFFFFF1A] border-solid pl-[50px] text-[25px]"
                        placeholder='Password' />
                    <button type="button" className='text-[#FFFFFF] font-semibold text-[25px] bg-[#050D5E]
                w-[250.58px] h-[60px] mt-[50px] ml-[50px] opacity-100
                border border-solid border-[#FFFFFF80]'>Login</button>
                </div>
            </div>
            <img className="w-[741.5px] h-[737.5px] mt-[5px] mr-[5px]" src="/Polygon2.png" />
        </div >
    )
}

export default Login4
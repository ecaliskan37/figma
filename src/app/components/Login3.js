import React from 'react'

const Login3 = () => {
    return (
        <div className="box-content inset-6 border-[#FFFFFF] bg-[#FFFFFF] m-0 p-0 w-[1440px] h-[878px] flex">
            <div className="flex 1 w-[586px] bg-[#1AEBB7] h-[878px]">
                <div className="box-border border border-solid border-l-[#FFFFFF] border-t-[#FFFFFF]
                                border-r-[#1AEBB7]
                                border-b-[#FFFFFF]
                                flex  mt-[69px] ml-[95px] 
                                shadow-[0_0_20px_0_#B0AAAA]  w-[500px] h-[740px] justify-center items-center">
                    <img src="/Arslan.png" className='w-[500px] h-[500px] mt-[195px] ml-[93px] mb-[193px] mr-[93px]' />
                </div>
            </div>
            <div className="flex 1 w-[874px] bg-[#FFFFFF] h-[878px]">
                <div className="box-border border border-solid border-t-[#FFFFFF] border-r-[#FFFFFF]
                                border-l-[#1AEBB7]
                                border-b-[#FFFFFF]
                                flex mt-[69px] mr-[95px] 
                                shadow-[0_0_20px_0_#B0AAAA]  w-[700px] h-[740px] justify-center items-center">
                    <div className='flex flex-col'>
                        <h1 className='text-[50px] width-[181px] height-[57px] ml-[171px]
                    color-[#000000B2] font-bold justify-center'>LOGIN</h1>
                        <div className='flex flex-col gap-[30px]'>
                            <input type="user" className='font-normal w-[442.27px] h-[58.85px] border border-solid 
                        border-[#0000004F] text-[#101A1CD6] pl-5 text-[20px]' placeholder='Username' />
                            <input type="password" className='font-normal w-[442.27px] h-[58.85px] border border-solid
                        border-[#0000004F] text-[#101A1CD6]  pl-5 text-[20px]' placeholder='Password' />
                            <div className='flex gap-10'>
                                <button type="button"
                                    className='w-[233.27px] h-[60.74px] bg-[#1AEBB7] text-[#FFFFFF]
                                text-[25px]
                                font-bold
                                border-[#000000 to-70%]
                                border-0
                                bg-blend-overlay
                                animate-[instant]
                                '>
                                    LOGIN
                                </button>
                                <div className='flex flex-col gap-2.5'>
                                    <label className='font-semibold w-[179.45px] h-[27.97px]
                                text-[20px] text-[#000000B2]'>Forgot password</label>
                                    <label className='font-semibold w-[96.84px] h-[27.97px]
                                text-[20px] text-[#000000B2]'>Register</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default Login3
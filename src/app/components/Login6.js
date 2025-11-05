import React from 'react'

const Login6 = () => {
    return (
        <div className='relative w-[1440px] h-[899px] bg-[#000000]'>
            <div className='block'>
                <img src="/Polygon 1.png" className="absolute top-[70px] left-[200px] w-[116px] h-[120px]" />
                <img src="/Rectangle 12.svg" className="absolute bottom-2.5  w-[533px] h-[500px]" />
            </div>
            <div className='absolute top-[150px] left-[480px] w-[526px] h-[612px] bg-[#FFFFFF0D]'>
                <h1 className='w-[334px] h-[103.5px] mt-[39px] ml-[45px] font-semibold text-[70px] 
                text-[#FFFFFF80]'>LOGIN</h1>
                <input className='w-[461px] h-[52.60px] rounded-[10px] mt-[10.21px] ml-[45px] pl-[18px]
                border-solid border-[#FFFFFF] text-[#FFFFFF80] text-[20px] bg-[#00000080]'
                    placeholder="Username" />
                <input className='w-[461px] h-[52.60px] rounded-[10px] mt-[30.21px] ml-[45px] pl-[18px]
                border-[#0000004F] border border-solid  text-[#FFFFFF80]  text-[20px] bg-[#00000080]'
                    placeholder="Password" />
                <button className='flex justify-center items-center w-[222px] h-[54px] mt-[28.99px] 
                ml-[45px] font-semibold 
                text-[#FFFFFF80] bg-[#FFFFFF1A] rounded-[10px]
                text-[25px]'>
                    LOGIN</button>
                <div className='inline-flex items-center w-[554px] ml-[43px]'>
                    <hr className="bg-[#FFFFFFA1] h-px w-[204px] my-10 border-0 font-extrabold tracking-wide" />
                    <span className=" font-semibold  text-[#FFFFFFA1] text-[25px] pr-3 pl-3">OR</span>
                    <hr className="h-px w-[200px] my-10 border-0 bg-[#FFFFFF80] font-extrabold tracking-wide" />
                </div>
                <div className='flex flex-col w-[460px]  text-gray-500 font-semibold justify-between  
                 ml-[45px] gap-10'>
                    <div className='inline-flex gap-12 justify-center'>
                        <img src="/G.png" style={{ width: "30px", height: "30px" }} />
                        <img src="/F.png" style={{ width: "30px", height: "30px" }} />
                    </div>
                </div>
            </div>
            <div>
                <img src="/Rectangle 13.svg" className='absolute right-0 w-[400px] h-[500px]' />
                <img src="/Polygon 2.png" className='absolute top-[720px] right-[100px] w-[115px] h-[100px]' />
            </div>
        </div >
    )
}

export default Login6
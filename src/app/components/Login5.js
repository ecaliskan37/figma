import React from 'react'

const Login5 = () => {
    return (
        <div>
            <div className='bg-[#095F59] flex text-[bg-[#FFFFFF] justify-between align-middle
            w-[1440px] h-20'>
                <h1 className='w-[98px] h-[43px] mt-[13px] ml-[19px] font-bold text-[35px]
                text-[#FFFFFF]'>SHEY</h1>
                <nav className='flex w-[328px] h-6 mt-7 font-semibold text-[20px] ml-[1000px]
                text-[#FFFFFFD9] justify-evenly display:block'>
                    <a>Home</a>
                    <a>Services</a>
                    <a>Contact us</a></nav>
            </div>
            <div className='absolute w-[554px] h-[531px] mt-[102px] ml-[430px] bg-[#FFFFFFE5] shadow-[0px_4px_10px_0px_#8A8A8A]'>
                <h1 className='w-[334px] h-[103.5px] mt-[39px] ml-[45px] font-semibold text-[70px] 
                text-[#095F59D6]'>LOGIN</h1>
                <input className='w-[461px] h-[52.60px] rounded-[10px] mt-[10.21px] ml-[45px] pl-[18px]
                border-[#0000004F] border border-solid bg-[#FFFFFFE5] text-[#101A1CD6] text-[20px]'
                    placeholder="Username" />
                <input className='w-[461px] h-[52.60px] rounded-[10px] mt-[30.21px] ml-[45px] pl-[18px]
                border-[#0000004F] border border-solid bg-[#FFFFFFE5] text-[#101A1CD6] text-[20px]'
                    placeholder="Password" />
                <button className='flex justify-center items-center w-[222px] h-[54px] mt-[28.99px] 
                ml-[45px] font-semibold 
                text-[#FFFFFFE5] bg-[#095F59D6] rounded-[10px]
                text-[25px]'>
                    LOGIN</button>
                <div className='inline-flex items-center w-[554px] ml-[43px]'>
                    <hr className="bg-[#101A1C] h-px w-[204px] my-10 border-0 font-extrabold tracking-wide" />
                    <span className=" font-semibold  text-[#101A1C] text-[25px] pr-3 pl-3">OR</span>
                    <hr className="h-px w-[200px] my-10 border-0 bg-[#101A1C]" />
                </div>
                <div className='flex flex-col w-[460px]  text-gray-500 font-semibold justify-between  
                 ml-[45px] gap-10'>
                    <div className='inline-flex gap-12 justify-center'>
                        <img src="/G.png" style={{ width: "20px", height: "20px" }} />
                        <img src="/F.png" style={{ width: "20px", height: "20px" }} />
                    </div>
                    <label className='flex font-semibold w-[460px] text-[20px] justify-center mt-[-25px] text-[#095F59BF]'>Not yet registered , Click here to sign up</label>
                </div>
            </div>
            <div className='w-[1453px] mt-60 -ml-2.5'>
                <img src="/Rectangleshey.png" width={"1453px"} />
                <img src="/Ellipse1.png" width={"278px"} className="ml-[1175px] mt-[-265px]" />
                <img src="/Ellipse.png" width={"185px"} className="mt-[-460px] ml-[110px]" />
            </div>
        </div>
    )
}

export default Login5
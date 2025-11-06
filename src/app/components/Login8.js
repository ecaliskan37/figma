import React from 'react'

const Login8 = () => {
    return (
        <div className='relative  w-[1440px] h-[850px] bg-[#FFFFFF] justify-center'>
            <div>
                <img src="/Ellipseson2.svg" className='absolute w-[500px] h-[550px] right-[-1px]' />
                <img src="/Ellipseson1.svg" className='absolute w-[600px] h-[450px] top-[400px]' />
            </div>
            <div className='absolute top-[130px] left-[420px] w-[500px] h-[580px] 
            bg-[#FFFFFFE5] rounded-[20px] shadow-[0px_4px_10px_0px_#8A8A8A]'>
                <h1 className='w-[334px] h-[103.5px] mt-[39px] ml-[45px] font-semibold text-[70px] 
                text-[#02B94BD6]'>LOGIN</h1>
                <input className='w-[400px] h-[52.60px] rounded-[10px] mt-[10.21px] ml-[45px] pl-[18px]
                border-solid border-[#0000004F] border text-[#101A1CD6] text-[20px] bg-[#FFFFFFE5]'
                    placeholder="Username" />
                <input className='w-[400px] h-[52.60px] rounded-[10px] mt-[30.21px] ml-[45px] pl-[18px]
                border-solid border-[#0000004F] border text-[#101A1CD6] text-[20px] bg-[#FFFFFFE5]'
                    placeholder="Password" />
                <button className='flex justify-center items-center w-[222px] h-[54px] mt-[28.99px] 
                ml-[45px] font-semibold text-[#FFFFFFE5] bg-[#02B94BD6] rounded-[10px] text-[25px]'>
                    LOGIN</button>
                <div className='inline-flex items-center w-[430px] ml-[43px]'>
                    <hr className="bg-[#101A1C] h-px w-[150px] my-10 border-0 font-extrabold tracking-wide" />
                    <span className="font-semibold text-[#101A1C] text-[25px] pr-3 pl-3">OR</span>
                    <hr className="h-px w-[180px] my-10 border-0 bg-[#101A1C] font-extrabold tracking-wide" />
                </div>
                <div className='flex flex-col w-[430px]  text-gray-500 font-semibold justify-between'>
                    <div className='inline-flex gap-14 justify-center pl-5'>
                        <img src="/G.png" style={{ width: "30px", height: "30px" }} />
                        <img src="/F.png" style={{ width: "30px", height: "30px" }} />
                    </div>
                    <div className='flex w-[480px] justify-between p-10 text-[#02B94BBF] font-semibold'>
                        <h1>Forgot password</h1>
                        <h1>Register</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login8
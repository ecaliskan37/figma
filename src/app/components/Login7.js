import React from 'react'

const Login7 = () => {
    return (
        <div className="w-[1668px] h-[850px] bg-[url('/Rectangle1.png')] bg-cover bg-center 
         bg-black/60 bg-blend-overlay" >
            <div className='relative w-[1568px] h-[1180px]'>
                <img src="/round.png" className='absolute w-[300px] h-[300px] top-[90px] left-[300px] border-opacity-5 ' />
            </div >
            <div className='relative flex flex-col gap-3 w-[485px] h-[340px] bg-[#FFFFFF33]
               ml-[500px] top-[-930px] rounded-[50px] pl-15 pr-5  shadow-[inset_0px_0px_0px_0px_#8A8A8A]'>
                <h1 className='text-[#FFFFFFCC] font-bold text-[40px] w-[200px] h-[51px] ml-[100px] flex justify-center'>LOGIN</h1>
                <input className='w-[375px] h-[33px] text-[20px] pl-[23px] ml-4.5 text-[#FFFFFFD6]
                border-[#000000D6] border-solid border mt-5'
                    placeholder='Username' />
                <input className='w-[375px] h-[33px] text-[20px] mt-[30px]  ml-4.5 pl-[23px] text-[#FFFFFFD6]
                border-[#000000D6] border-solid border'
                    placeholder='Password' />
                <div className='flex justify-between w-[375px] pl-5px pr-5px mt-10 ml-4.5 '>
                    <button className='bg-[#1112129E] w-[150px] h-10 text-[20px] text-[#FFFFFF80] font-bold border-[#000000B2] border-solid'>
                        LOGIN</button>
                    <div className='font-semibold text-[15px] text-[#FFFFFFB2]'>
                        <h1>Forgot password</h1>
                        <h1>Register</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login7
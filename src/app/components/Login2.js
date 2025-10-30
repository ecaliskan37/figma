import React from 'react'

const Login2 = () => {
    return (
        <div className='bg-white h-screen flex flex-row items-center justify-center'>
            <div className='flex 1 w-[560px]'>
                <form>
                    <div className='flex flex-col gap-3'>
                        <h1 className="font-semibold text-[70px] leading-none 
                        text-branddark pb-5 text-[#101A1C]/84">LOGIN</h1>
                        <div >
                            <input placeholder="Username" className="shadow appearance-none border
                            rounded-lg  text-[#101A1C]/84 w-[400px]
                            border-gray-200 py-2 px-3 mb-3 pt-4 pb-4 focus:outline-none focus:shadow-outline placeholder:text-gray-700"
                                id="username" type="input" />
                        </div >
                        <div>
                            <input placeholder="Password" className="shadow appearance-none border
                             border-gray-200 w-[400px] py-2 px-3  mb-3
                              focus:outline-none focus:shadow-outline placeholder:text-gray-700 
                               rounded-lg  pt-4 pb-4  text-[#101A1C]/84"
                                id="password" type="password" />
                        </div>
                        <div className='flex flex-col'>
                            <button className="border border-black bg-black text-white justify-center
                        w-[140px] font-semibold py-2 px-4 mt-3 pt-2 pb-2 rounded-lg tracking-wide" type="button">
                                LOGIN
                            </button>
                            <div className='inline-flex items-center w-[520px] pr-40'>
                                <hr className="bg-[#101A1C] h-px w-[280px] my-10 border-0 font-extrabold tracking-wide" />
                                <span className=" font-semibold  text-[#101A1C] text-xl pr-3 pl-3">OR</span>
                                <hr className="h-px w-[280px] my-10 border-0 bg-[#101A1C]" />
                            </div>
                            <div className='flex flex-col w-[400px] text-gray-500 font-semibold justify-between pr-10 gap-10'>
                                <div className='inline-flex gap-12 justify-center'>
                                    <img src="/G.png" style={{ width: "20px", height: "20px" }} />
                                    <img src="/F.png" style={{ width: "20px", height: "20px" }} />
                                </div>
                                <label className='font-semibold w-[440px] justify-center text-[#101A1C]/64'>Not yet registered , Click here to sign up</label>
                            </div>
                        </div>
                    </div >
                </form >
            </div >
            <div className='flex 1'>
                <img src="/Papagan.png" style={{ width: "600px", height: "700px" }} />
            </div>
        </div >
    )
}

export default Login2
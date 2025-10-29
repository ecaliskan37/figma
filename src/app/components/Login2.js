import React from 'react'

const Login2 = () => {
    return (
        <div className='bg-white h-screen flex flex-row items-center justify-center'>
            <div className='flex 1'>
                <form>
                    <div className='flex flex-col gap-3'>
                        <h1 className="text-7xl font-bold text-gray-700 tracking-wide pb-5">LOGIN</h1>
                        <div >
                            <input placeholder="Username" className="shadow appearance-none border
                            rounded-lg
                            border-gray-300 w-2xs py-2 px-3 text-gray-700 mb-3 pt-4 pb-4 tracking-wide
                        leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700"
                                id="username" type="input" />
                        </div >
                        <div>
                            <input placeholder="Password" className="shadow appearance-none border border-gray-300 w-2xs py-2 px-3 text-gray-700 mb-3
                 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700 tracking-wide
                 rounded-lg  pt-4 pb-4"
                                id="password" type="password" />
                        </div>
                        <div className='flex flex-col'>
                            <button className="border border-black bg-black text-white justify-center
                         w-1/4 font-bold py-2 px-4 mt-3 pt-2 pb-2 rounded-lg tracking-wide" type="button">
                                LOGIN
                            </button>
                            <div className='inline-flex items-center w-lg pr-40'>
                                <hr className=" bg-black h-px w-1/3 my-10 border-0 font-extrabold tracking-wide" />
                                <span className="font-mono text-xl text-black pr-3 pl-3">OR</span>
                                <hr className="h-px w-1/3 my-10 border-0 bg-black" />
                            </div>
                            <div className='flex flex-col text-gray-500 font-semibold justify-between pr-10 gap-10'>
                                <div className='inline-flex gap-12 justify-center w-2xs'>
                                    <img src="/G.png" style={{ width: "30px", height: "30px" }} />
                                    <img src="/F.png" style={{ width: "30px", height: "30px" }} />
                                </div>
                                <label className='text-gray-500 tracking-wide'>Not yet registered , Click here to sign up</label>
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
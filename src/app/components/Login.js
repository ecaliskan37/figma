import React from 'react'

const Login = () => {
    return (
        <div className='bg-white h-screen flex flex-row items-center justify-center'>
            <div className='flex 1 m-0'>
                <form>
                    <div>
                        <h1 className="text-5xl pb-5 font-extrabold text-white [-webkit-text-stroke:2px_#ef4444]">LOGIN</h1>
                        <div >
                            <input placeholder="Username" className="shadow appearance-none border border-gray-300 rounded w-lg py-2 px-3 text-gray-700 mb-3
                        leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700"
                                id="username" type="input" />
                        </div >
                        <div>
                            <input placeholder="Password" className="shadow appearance-none border border-gray-300 rounded w-lg py-2 px-3 text-gray-700 mb-3
                 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700"
                                id="password" type="password" />
                        </div>
                        <div>
                            <button className="border bg-red-500 border-red-500 text-white justify-center
                         w-1/2 font-bold py-2 px-4 mt-3" type="button">
                                LOGIN
                            </button>
                            <div className='text-gray-500 font-semibold flex justify-between pr-10 pt-6'>
                                <label>Forget Password</label>
                                <label>Register</label>
                            </div>
                        </div>
                    </div >
                </form >
            </div >
            <div className='flex 1 m-0'>
                <img src="/Rectangle.png" style={{ width: "500px", height: "500px" }} />
            </div>
        </div >
    )
}

export default Login
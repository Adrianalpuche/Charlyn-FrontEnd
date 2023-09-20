import React from "react";

function Formulario () {
    return (
        <div className="px-10 py-20 bg-white border-2 border-gray-100 rounded-3xl">
            <h1 className="text-5xl font-semibold">Welcome Back</h1>
            <p className="mt-4 text-lg font-medium text-gray-400">Welcome back! please enter your details. </p>
            <div className="mt-8">
                <label className="text-lg font-medium">Email</label>
                <input
                    className = 'w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-x'
                    placeholder = 'Enter your email'
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    className = 'w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-x'
                    placeholder = 'Enter your password'
                    type = "password" 

                />
            </div>
            <div className='flex items-center justify-between mt-8'>
        
                <button className='text-base font-medium text-violet-400 '>Forgot Password?</button>
            </div>
            <div className="flex flex-col mt-8">
                <button className="py-3 text-lg font-bold text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 rounded-xl"> Sign in</button>
            </div>
            <div className="flex items-center justify-center mt-8">
                <p className="text-base font-medium"> Don´t have a account </p>
                <button className='ml-2 text-base font-medium text-violet-400'>Sign up</button>

            </div>
        </div>
    )
}

export default Formulario;
import React from "react";
import Link from "next/link";

const NonValidUser = () =>{
    return(
        <React.Fragment>

            <div>
            <h1 className="absolute text-center mr-auto top-36 bg-white inline-block left-0 p-5  text-5xl text-red-500  right-0">Please Register Or Log In Fast</h1>
            </div>
            <div className='fahad flex justify-center items-center h-screen'>
            <span className='fullscreenDiv '>
            <h1 className='mt-6 font-semibold text-white bg-black mr-auto inline-block  text-lg p-4 '>If you are not register! <Link href="./admin/admin_reg" className='text-yellow-300'>Register</Link></h1><br></br>
            <h1 className='mt-6 mb-6  font-semibold text-white bg-black mr-auto inline-block  text-lg p-4'>Already have a account <Link href="./admin/admin_log" className='text-green-500 ml-16-10'>Log in</Link></h1>

            </span>
            </div>

        </React.Fragment>
    )
}

export default NonValidUser;
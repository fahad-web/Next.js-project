import Link from "next/link";
import Meta from "../meta";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SessionCheck from "../component/sessioncheck";


const AdminLogIn = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
    {
      const session = sessionStorage.getItem('email');

      if (session) {
        setEmail(sessionStorage.getItem('email'));
        router.push('/admin/admin_profile');
      }
    }

  }, []);


  const handleEChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePChange = (e) => {
    setPassword(e.target.value);
  }


  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };


  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError('Email and password are required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else {
      const res = await doSignIn(email, password)
      console.log(res);
    }
  }
  const doSignIn = async (event) => {

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL + '/login', { email, password }, { withCredentials: true });
      sessionStorage.setItem('email', response.data);
      console.log(email)
      //sessionStorage.getItem(document.cookie);
      console.log("cookie :" + document.cookie);
      //alert("Log in Successful")
      router.push('/admin/admin_profile');
      window.location.reload();

    } catch (error) {
      console.log(error)
      alert("Not Mach Data")
    }
  }


  return (
    <div>
      <Meta title="Log In Page" keywords="fahad" description="Fahad" />

      <SessionCheck />
      {/* <div className="formcss p-4">
          <h1 className="text-black texts font-semibold text-lg">This is admin Log in Page</h1>
          <form className="inline-block" onSubmit={handleSubmit}>
            <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="bg-black mt-7 text-xs" type="email" name="email" value={email} onChange={handleEChange}  />
            </label><br></br><br></br>

            <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="bg-black text-xs" type="password" name="password" value={password} onChange={handlePChange}  />
            </label><br></br>

            {error && <p className="text-red-700 absolute mt-3 mb-3 left-0 right-0 mr-auto ">{error}</p>}


            <button type="submite" class=" w-10/12 relative mt-14 bts focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Log In</button>
            <h2 className="mt-2 mb-2">______________  OR  ______________</h2>

             <Link href="admin_reg" className="w-10/12 bts focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 block ">Registration</Link>

          </form>
        </div> */}
      <center>

        <div class="w-full ff02 mt-14 max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" onSubmit={handleSubmit} action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white texts">Sign in to our platform</h5>
            <div>
              <label for="email" class="block text-start texts mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" value={email} onChange={handleEChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label for="password" class="block texts text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" name="password" value={password} id="password"  onChange={handlePChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div class="flex items-start">
              
              <Link href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <Link href="/admin/admin_reg" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
            </div>
          </form>
        </div>
      </center>

    </div>
  );
}

export default AdminLogIn
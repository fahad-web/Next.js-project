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
      const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL + '/login', { email, password }, {

        withCredentials: true

      });
      sessionStorage.setItem('email', response.data);
      sessionStorage.getItem(document.cookie)
      console.log(document.cookie);
      //alert("Log in Successful")
      router.push('/admin/admin_profile');
      window.location.reload();

    } catch (error) {
      console.log(error)
      //alert("Not Mach Data")
    }
  }


  return (
    <div>
      <Meta title="Log In Page" keywords="fahad" description="Fahad" />

      <SessionCheck />
      <center >

        <div className="formcss p-10">
          <h1 className="text-black texts">This is Admin Log in Page</h1>
          <form className="inline-block" onSubmit={handleSubmit}>
            <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="bg-black mt-7" type="email" name="email" value={email} onChange={handleEChange} />
            </label><br></br><br></br>

            <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="bg-black" type="password" name="password" value={password} onChange={handlePChange} />
            </label><br></br><br></br>

            {error && <p className="text-red-700 absolute left-0 right-0 mr-auto ">{error}</p>}


            <button type="submite" class="relative mt-10 bts focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Log In</button>

            <p className="mt-8 texts">If you not create account&nbsp;&nbsp;&nbsp; <Link href="admin_reg" className="bts focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Registration</Link></p>

          </form>
        </div>

      </center>

    </div>
  );
}

export default AdminLogIn
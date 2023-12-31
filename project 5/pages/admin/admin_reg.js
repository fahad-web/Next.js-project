import Link from "next/link";
import Meta from "../meta";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const AdminReg = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname: "",
    email: "",
    contact: 2,
    password: "",
    filename: ""
  });
  const { fastname, lastname, email, contact, password, filename } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    console.log(user)


    try {

      const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL + '/register', user, {

        headers: {

          'Content-Type': 'application/json',
          withCredentials:true

        }

      });

      console.log(response.data);

      alert("Admin Registration Successful!");
      router.push('/admin/admin_log');

    } catch (error) {

      console.error('Error Manager Signing Up:', error);

      alert("Admin Registration Failed!");

    }

  };


  return (
    <>
      <Meta title="Admin Registration" keywords="fahad" description="Fahad" />
      <center>


        <div className=" formcssr p-3">
          <h1 className="text-black texts mb-5 mt-5">This is Admin Registration Page</h1>
          <form onSubmit={handleSubmit} className="h-2/4 text-black mt-6 w-2/3  ">
            <label className="texts">Enter first name&nbsp;&nbsp;&nbsp;
              <input type="text" id="fastname" name="fastname" onChange={handleChange} value={fastname} />
            </label><br></br>

            <label className="texts">Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2" type="text" id="lastname" name="lastname" onChange={handleChange} value={lastname} />
            </label><br></br>

            <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2" type="email" id="email" name="email" onChange={handleChange} value={email} />
            </label><br></br>

            <label className="texts">Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2" type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
            </label><br></br>

            <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2" type="text" id="password" name="password" onChange={handleChange} value={password} />
            </label><br></br>


            <label className="texts">Image
              <input className="mt-2" type="file" name="filename" onChange={handleChange} value={filename} />
            </label><br></br><br></br>


            <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Registration</button>
            <p>Already you have a Account! <Link className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 bts" href="admin_log">Log in</Link></p>
          </form>
        </div>

        {/* <p>Already you have a Account! <Link href="admin_log">Log in</Link></p>
        <Link href="/home">Home</Link> */}

      </center>

    </>
  );
}

export default AdminReg
import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SessionCheck from "../component/sessioncheck";


const AdminLogIn = () => {

  
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

  
  const handleEChange = (e)=>{
    setEmail(e.target.value);
  }
  const handlePChange = (e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL+'/login', {email, password });
      sessionStorage.setItem('email', response.data);
      alert("Log in Successful")
      router.push('/admin/admin_profile');
      window.location.reload();

    } catch (error) {
        console.log("error22: "+error.message)
      alert("Not Mach Data")
    }
  }


    return (
      <div> 
        <Meta title="Log In Page" keywords="fahad" description ="Fahad" />

        <SessionCheck/>
          <center className="text-white">
          <h1>This is Admin Log in Page</h1>
          <div>
            <form onSubmit={handleSubmit}>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email"  name="email" value={email} onChange={handleEChange} />
            </label><br></br><br></br>

            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="password"  value={password} onChange={handlePChange}/>
            </label><br></br><br></br>


           <button type="submite" >Log In</button>
           </form>
          </div>
          <p>If you not create account <Link href="admin_reg">Registration</Link></p>
          <Link href="/home">Home</Link>
        </center>
       
      </div>
    );
  }

export default  AdminLogIn
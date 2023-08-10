import { Forum, Linden_Hill } from "next/font/google";
import Link from "next/link";
import Meta from "../meta";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const UpdateManager = () => {


    const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname:"",
    email: "",
    contact:1,
    password: ""
  });
  const {  fastname, lastname,email,contact, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    // user.id = parseInt(user.id);
    console.log(user)
    
  
  try {

    const response = await axios.put(process.env.NEXT_PUBLIC_MAIN_URL+'/updatemanagerinfo', user, {

      headers: {

        'Content-Type': 'application/json'

      }

    });

    console.log(response.data);

    alert("manager Update Successful!");
    //router.push('/admin/admin_log');

  } catch (error) {

    console.error('Error Admin Signing Up:', error);

    alert("manager Update Failed!");

  }

};


    return(
        <>
        <Meta title="Update Manager" keywords="fahad" description ="Fahad" />
        <form onSubmit={handleSubmit}>
                <label>Enter first name&nbsp;&nbsp;&nbsp;
                <input type="text" id="fastname" name="fastname"onChange={handleChange}  value={fastname}/>
                </label><br></br><br></br>

                <label>Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="lastname" name="lastname"onChange={handleChange}  value={lastname}/>
                </label><br></br><br></br>

                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email"onChange={handleChange}  value={email}/>
                </label><br></br><br></br>

                <label>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="contact" name="contact"onChange={handleChange}  value={contact}/>
                </label><br></br><br></br>

                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="password" name="password"onChange={handleChange}  value={password}/>
                </label><br></br><br></br>


                <button type="submit">Submit</button>
            </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br><br></br>
        <Link href="/home">Home</Link>
  
        </>
    );
}

export default  UpdateManager
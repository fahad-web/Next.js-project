import Link from "next/link";
import Meta from "../meta";

import axios from "axios";
import { useState , useEffect} from "react";
import SessionCheck from "../component/sessioncheck";
import { useRouter } from "next/router";

const ManagerAllData =  ({data}) => {

  const [jsonData, setJsonData] = useState([]);
  const router = useRouter();

  //  const [email, setEmail] = useState('')

  useEffect(() => {
    loadAllData();
    }, []);
    
    // useEffect(() => {
    //   if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
    //   {
    //       const session = sessionStorage.getItem('email');
    //       if (session) {
    //         setEmail(sessionStorage.getItem('email'));
           
    //       }         
    //   }
   
    //   }, []);

    // const deleteData = async () => {
    //   try {
    //     const managerId = window.prompt("Enter Manager ID :");
    //     const response = await axios.delete(process.env.NEXT_PUBLIC_MAIN_URL+'/delete/manager/'+managerId);
    //     console.log(response);
    //   } catch (error) {
    //   console.error(error);
    //   }
    // }

  const loadAllData = async () =>{
    try{
      const respons = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL+'/allmanager',{withCredentials:true});
      const jsonData = respons.data;
      setJsonData(jsonData);
      console.log(jsonData);
      //console.log(respons)
    }catch(error){
      console.log(error);
    }
  }


    return (
      <div className="text-white">
        <SessionCheck/>
       
       <Meta title="Manager List" keywords="fahad" description ="Fahad" />
        <h1>This is manager data</h1>
        <Link href="add_manager">Add Manager By  Admin</Link><br></br><br></br>
        <Link href="delete_manager">Delete Manager By  Admin ID</Link><br></br><br></br>
        <Link href="update_manager">Update Manager Data</Link><br></br><br></br>
        <Link href="/home">Home</Link><br></br><br></br>
        <button onClick={loadAllData}> Show Manager All Data</button>

        <h1>Manager Data</h1>
        {jsonData !== null && (
          <div>
          {Array.isArray(jsonData) ? (
          <div>
          <p>Response is an array:</p>
          <ol>
          {jsonData.map((item, index) => (
          <li key={index}>

            <Link href={""+ item.id }>{item.lastname}</Link>
              {/* ID :{item.id}<br></br>
              Fast Name : {item.fastname} <br></br>
              Last Name :{item.lastname}<br></br>
              Email : {item.email}<br></br>
              Phone : {item.contact}<br></br>
              <b>admin info ID : {item.adminID} Number admin add this manager </b><Link href="update_manager"><button type="submit">update</button></Link>  <button type="submit" onClick={() => deleteData()}>Delete</button> <br></br> */}
              
              
              <br></br>
          </li>
          ))}
          </ol>
          </div>
          ) : (
          <div>
          <p>Response is an object:</p>
          <p>{jsonData}</p>
          </div>
          )}
          </div>
          )}

        
      </div>
    )
  }

export default  ManagerAllData

              
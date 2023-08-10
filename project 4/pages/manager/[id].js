import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadManagerData from "./managerdata";
import axios from "axios";
import Link from "next/link";
import Meta from "../meta";

//https://youtu.be/Un3gQmTik4o


    const managerData = ({data}) =>{

    const [jsonData, setJsonData] = useState(null);
    
    const router = useRouter();
    const adminID = router.query.id;
    const managerId = router.query.adminID;


    useEffect(() => {
      loadAllData();
      }, []);

        const deleteData = async () => {
          try {
          
            const response = await axios.delete(process.env.NEXT_PUBLIC_MAIN_URL+'/delete/manager/'+adminID);
            console.log(response);
            
          } catch (error) {
          console.error(error);
          }
        }


        const loadAllData = async () =>{
          try{
            const respons = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL+'/getmanager/'+adminID);
            const jsonData = respons.data;
            setJsonData(jsonData)
            console.log(jsonData)
          }catch(error){
            console.log(error);
          }
        }

          const printObject = () =>{

            if(jsonData){
            return(
              <React.Fragment>
                <Meta title={jsonData.lastname} keywords={jsonData.email} description ={jsonData.id} />
                <p>First Name: {jsonData.fastname}</p>
                <p>Last Name: {jsonData.lastname}</p>
                <p>Email: {jsonData.email}</p>
                <p>Contact: {jsonData.contact}</p>
                <p>Admin ID: {jsonData.adminID}</p>
                <Link href="update_manager"><button type="submit">update</button></Link>  
                <button className="btn-wide" type="submit" onClick={() => deleteData()}>Delete</button>
              </React.Fragment>
            )
            }else {
              return <p>Loading...Data Scaning</p>;
              
          }
             
        }

      return (
          <React.Fragment>
            <p><b>Manager ID :{adminID} info :</b></p>
            {printObject()}
          </React.Fragment>
      )
}
export default managerData
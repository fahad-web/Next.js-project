import Link from "next/link";
import Meta from "../meta";
import React from "react";
import SessionCheck from "../component/sessioncheck";

const TourGuidList =() => {
    return (
      <React.Fragment >
       <Meta title="Tourguid List" keywords="fahad" description ="Fahad" />

       <SessionCheck/>
        <div className="text-white">
        <h1>This is Tourguid List</h1>

        <Link href="update_tourguid">Update Tourguid Data</Link><br></br><br></br>


        <Link href="delete_tourguid">Delete TourGuid</Link><br></br><br></br>

        <Link href="/home">Home</Link>
        </div>
    
      </React.Fragment>
    );
  }

export default  TourGuidList
import Link from "next/link";
import Meta from "../meta";
import React from "react";
import SessionCheck from "../component/sessioncheck";

const TravelerList  = () => {
    return (
      <React.Fragment>
        <Meta title="Traveller List" keywords="fahad" description ="Fahad" />
        <SessionCheck/>
        <div className="text-white">
        <h1>This is Traveler List</h1>
        <Link href="/home">Home</Link>
        </div>
    
      </React.Fragment>
    );
  }

  
export default  TravelerList
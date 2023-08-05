import Link from "next/link";
import Meta from "../meta";
import axios from "axios";

const ManagerAllData =  () => {

    return (
      <div>
       
       <Meta title="Manager List" keywords="fahad" description ="Fahad" />
        <h1>This is manager data</h1>
        <Link href="add_manager">Add Manager By  Admin</Link><br></br><br></br>
        <Link href="delete_manager">Delete Manager By  Admin ID</Link><br></br><br></br>
        <Link href="update_manager">Update Manager Data</Link><br></br><br></br>
        <Link href="/home">Home</Link>
     
      </div>
    )
  }

export default  ManagerAllData
import Link from "next/link";
import Meta from "../meta";


const UpdateAdmin = () => {
    return(
        <>
           <Meta title="Update Admin Info" keywords="fahad" description ="Fahad" />
           <center>

                <h3>Update Admin</h3>
           <form>

                <label>Enter first name&nbsp;&nbsp;&nbsp;
                <input type="text" />
                </label><br></br><br></br>

                <label>Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" />
                </label><br></br><br></br>

                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" />
                </label><br></br><br></br>

                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" />
                </label><br></br><br></br>

                <label>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" />
                </label><br></br><br></br>

                <label>Image
                <input type="file" />
                </label><br></br><br></br>


               <button>Update</button>
            </form>
                <Link href="admin_profile">Admin Profile</Link><br></br><br></br>
                <Link href="/home">Home</Link>
           </center>
    
        </>
    );
}
export default  UpdateAdmin
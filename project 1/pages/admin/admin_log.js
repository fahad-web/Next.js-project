import Link from "next/link";
import Meta from "../meta";

const ManagerAllData = () => {
    return (
      <div> 
        <Meta title="Log In Page" keywords="fahad" description ="Fahad" />
       <center>
          <h1>This is Admin Log in Page</h1>
          <div>
            <form>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" />
            </label><br></br><br></br>

            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" />
            </label><br></br><br></br>
            </form>

           <button>Log In</button>
          </div>
          <p>If you not create account <Link href="admin_reg">Registration</Link></p>
          <Link href="/home">Home</Link>
        </center>
      </div>
    );
  }

export default  ManagerAllData
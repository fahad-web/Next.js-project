import Link from "next/link";
import Meta from "../meta";

const ManagerAllData = () => {
    return (
      <div>
        <Meta title="Admin Registration" keywords="fahad" description ="Fahad" />
        <center>

        <h1>This is Admin Registration Page</h1>
        <div>
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


                <button>Submit</button>
            </form>
        </div>
        
        <p>Already you have a Account! <Link href="admin_log">Log in</Link></p>
        <Link href="/home">Home</Link>

        </center>

      </div>
    );
  }

export default  ManagerAllData
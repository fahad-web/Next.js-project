
import Link from "next/link";
import Meta from "../meta";
import React from "react";

const AddManager = () => {
    return(
        <React.Fragment>
            <Meta title="Add Manager" keywords="fahad" description ="Fahad" />
        <form>

            <label>
                Fast Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Add</button><br></br><br></br>

        </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br><br></br>
        <Link href="/home">Home</Link>
     
        </React.Fragment>
    );
}
export default  AddManager
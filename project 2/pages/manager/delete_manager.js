import Link from "next/link";
import Meta from "../meta";

const  DeleteManeger = () => {
    return(
        <>
        <Meta title="Delete Manager" keywords="fahad" description ="Fahad" />
        <form>

            <label>
                Admin ID
                <input type="number" id="adminID" name="adminID" />
            </label><br></br><br></br>

            <label>
                Manager ID
                <input type="number"/>
            </label><br></br><br></br>

            <button>Delete</button><br></br><br></br>

        </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      
        </>

    );
}

export default   DeleteManeger
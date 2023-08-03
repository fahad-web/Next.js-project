import Link from "next/link";
import Meta from "../meta";

const  DeleteTourguid = () =>{
    return(
        <>
        <Meta title="Delete Tourguid" keywords="fahad" description ="Fahad" />
        <form>

            <label>
                Admin ID
                <input type="number"/>
            </label><br></br><br></br>

            <label>
                Tourguid ID
                <input type="number"/>
            </label><br></br><br></br>

            <button>Delete</button><br></br><br></br>

        </form>
        <Link href="tourguid_list">Tourguid List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      </>

    );
}

export default   DeleteTourguid()
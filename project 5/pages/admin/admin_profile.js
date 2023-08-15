import Link from "next/link";
import Meta from "../meta";
import SessionCheck from "../component/sessioncheck";


const AdminProfile = () => {

  return (
    <div>

      <Meta title="Profile Page" keywords="fahad" description="Fahad" />
      <SessionCheck />
      <h1 className="text-center text-white">This is Admin profile</h1>

    </div>
  );
}

export default AdminProfile
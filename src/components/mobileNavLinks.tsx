import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

function MobileNavLinks() {
    const {logout} = useAuth0();
  return (
    <div className=" flex flex-col gap-4">
      <Link to='/user-profile' className="flex items-center font-bold bg-white hover:text-orange-500">User Profile</Link>
      <Button onClick={()=> logout()} className=" flex items-center px-3 hover:bg-gray-500 font-bold bg-orange-500">Log out</Button>
    </div>
  )
}

export default MobileNavLinks

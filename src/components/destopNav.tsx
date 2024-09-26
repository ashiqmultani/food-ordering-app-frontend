import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./usernameMenu";

function DestopNav() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
   <span className="flex items-center space-x-2">
    {isAuthenticated? <UsernameMenu/> :  <div>
      <Button variant="ghost" className=" hover:text-orange-500  hover:bg-white font-bold text-lg"
      onClick={async ()=> await loginWithRedirect()
      }
      >Log in</Button>
    </div>}
   </span>
  )
}

export default DestopNav

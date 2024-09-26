import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
function UsernameMenu() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user ,logout} = useAuth0();
  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center px-3 gap-2 font-bold hover:text-orange-500">
    <CircleUserRound className="text-orange-500"/>
     {user?.email}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="container p-3 bg-white rounded-lg space-y-2">
        <DropdownMenuItem>
            <Link to='/user-profile' className="font-bold text-white p-1 rounded-md hover:bg-black bg-orange-500">User Profile</Link>
        </DropdownMenuItem>
        <Separator/> 
        <DropdownMenuItem>
           <Button onClick={()=> logout()} className=" flex flex-1 w-full font-bold bg-orange-500">Log out</Button>
        </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UsernameMenu

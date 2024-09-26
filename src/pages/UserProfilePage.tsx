import UserProfileForm from "@/form/user-profile-form/UserProfileForm"
import {useGetMyUser, useUpdateMyUser} from '@/api/MyUserApi'

const  UserProfilePage = ()=> {
    const {currentUser , isLoading : isGetLoading} = useGetMyUser(); 

    const {updateUser , isLoading : isUpdatingLoading} = useUpdateMyUser();

    if(isGetLoading){
      return <span>Loading...</span>
    }

    if(!currentUser) {
      return <span>Unalbe to laod user profile</span>
    }
  return <UserProfileForm currentUser ={currentUser} onSave={updateUser} isLoading={isUpdatingLoading}/>
}

export default UserProfilePage


import { UserProfile } from "@clerk/clerk-react";
 
const UserProfilePage = () => (
        <div className="flex justify-center">
        <UserProfile path="/user-profile" routing="path" />
        </div>
  
);
 
export default UserProfilePage;
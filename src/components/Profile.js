import React from "react";
import Avatar from "./Avatar";
import Username from "./Username";


const Profile = ({user}) => {
  return(
<div className="Profile">
  <Avatar photo={user.photo} />
  <div>{user.displayName}</div>
</div>
  )
};
export default Profile;


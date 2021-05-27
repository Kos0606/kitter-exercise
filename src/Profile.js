import React from "react";
import Avatar from "./Avatar";


const Profile = ({userDisplayName, userAccount}) => {
<div className="Profile">
  <Avatar photo = {userAccount.photo} />
</div>;
};
export default Profile;


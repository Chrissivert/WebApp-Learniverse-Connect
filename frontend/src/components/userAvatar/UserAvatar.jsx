import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../services/user-request";

function UserAvatar({ user }) {
  const [userData, setUserData] = useState(null);
  let avatar = "";

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserByEmail(user.sub);
        setUserData(response.data);
        console.log("User data:", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, [user]);

  // Set the avatar to the first two letters of the username if userData is available
  if (userData) {
    avatar = userData.username.slice(0, 2).toUpperCase();
  }

  return (
    <div className="user-avatar">
      {userData ? userData.avatar : avatar || "Loading..."}
    </div>
  );
}

export default UserAvatar;

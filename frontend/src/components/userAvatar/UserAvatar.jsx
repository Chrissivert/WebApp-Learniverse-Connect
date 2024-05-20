import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    console.log("inside");
    avatar = userData.username.slice(0, 2).toUpperCase();
    console.log("Avatar:", avatar);
  }

  return (
    <div className="user-avatar">
      {userData ? (
        <Link to="/profile">
          <div>{avatar}</div>
        </Link>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default UserAvatar;

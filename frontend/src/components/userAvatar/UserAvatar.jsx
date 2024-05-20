import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserByEmail } from "../../services/user-request";

function UserAvatar({ user }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  let avatar = "";

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserByEmail(user.sub);
        setUserData(response.data);
        console.log("User data:", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    }

    fetchUser();
  }, [user]);

  if (userData) {
    console.log("inside");
    avatar = userData.username.slice(0, 2).toUpperCase();
    console.log("Avatar:", avatar);
  }

  return (
    <div className="user-avatar">
      {!loading && userData && (
        <Link to="/profile">
          <div>{avatar}</div>
        </Link>
      )}
    </div>
  );
}

export default UserAvatar;

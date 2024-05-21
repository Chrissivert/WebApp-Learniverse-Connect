import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserByEmail } from "../../services/user-request";
import "./UserAvatar.css";

function UserAvatar({ user }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  let avatar = "";

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserByEmail(user.sub);
        setUserData(response.data);
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    }

    fetchUser();
  }, [user]);

  if (userData) {
    avatar = userData.username.slice(0, 2).toUpperCase();
  }

  return (
    <div className="user-avatar">
      {!loading && userData && (
        <Link
          to="/profile"
          className="user-avatar-link"
          aria-label="View Profile"
        >
          <div role="img" aria-label={`Avatar for ${userData.username}`}>
            {avatar}
          </div>
        </Link>
      )}
    </div>
  );
}

export default UserAvatar;

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UpdateUsername from "./UpdateUsername";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-bgwfnefdow6rcoct.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        console.log({ user_metadata });

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
        navigate("/");
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Information</h3>
        <UpdateUsername />
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;

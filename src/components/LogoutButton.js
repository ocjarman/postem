import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**The logout() method exposed by Auth0Context clears the application session
 * and redirects to the Auth0 /v2/logout endpoint to clear the Auth0 session. */

/**However, if you were to deploy your React application to production,
 * you need to add the production logout URL to the "Allowed Logout URLs" list
 * and ensure that Auth0 redirects your users to that production URL and not
 * localhost. Setting returnTo to window.location.origin will do just that. */

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

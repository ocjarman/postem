import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

const GET_ME = gql`
  {
    me {
      id
      firstName
      lastName
    }
  }
`;

const Home = () => {
  // built in loading and error data
  const { data, loading, error } = useQuery(GET_ME);
  const { isAuthenticated } = useAuth0();

  if (data) console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
      {loading && <h3>data loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {data && isAuthenticated && <h2>Welcome, {data.me.id}</h2>}
    </div>
  );
};

export default Home;

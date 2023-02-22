import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://plankton-app-cxczj.ondigitalocean.app/",
  // uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

console.log(client);
client
  .query({
    query: gql`
      query me {
        id
        firstName
        lastName
      }
    `,
  })
  .then((result) => console.log(result));

root.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain="dev-bgwfnefdow6rcoct.us.auth0.com"
      clientId="FvuF3W9Xp4zLL0YmDLWLuHB6EWjKJN7N"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-bgwfnefdow6rcoct.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      <App />
    </Auth0Provider>
  </ApolloProvider>
);

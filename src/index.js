import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql,
} from "@apollo/client";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://plankton-app-cxczj.ondigitalocean.app/",
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcl9pZCI6ImZha2UtYXV0aC11c2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ._Mus7IAmE3hhnctAOmusbmBIS8xEkd9K4HXMfexLkwg",
    },
  }),
  cache: new InMemoryCache(),
});

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
      <BrowserRouter>
        <Provider store={store}>
          <App client={client} />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  </ApolloProvider>
);

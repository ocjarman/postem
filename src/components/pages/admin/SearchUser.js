import React from "react";
import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const SearchUser = () => {
  const [userSearchByAccountId, setUserSearchByAccountId] = useState("");
  const [searchUser, { data, loading, error }] = useLazyQuery(QUERY_USER);

  const QUERY_USER = gql`
    query User($accountId: ID!) {
      user(accountId: $accountId) {
        firstName
        lastName
        orders
      }
    }
  `;

  return (
    <div>
      <input
        type="text"
        placeholder="search user account id"
        onChange={(event) => {
          setUserSearchByAccountId(event.target.value);
        }}
      />
      <button
        onClick={() => {
          searchUser({
            variables: { accountId: userSearchByAccountId },
          });
        }}
      >
        Search
      </button>
      <div className="userSearched">
        {data && <h1>{data.user.firstName}</h1>}
      </div>
    </div>
  );
};

export default SearchUser;

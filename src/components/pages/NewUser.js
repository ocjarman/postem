import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($firstName: firstName, $lastName: lastName) {
    createUser(input: $input) {
      firstName
      lastName
      email
    }
  }
`;
const NewUser = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");

  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  return (
    <div>
      <input
        type="text"
        placeholder="First name..."
        onChange={(event) => {
          setFirst(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last name..."
        onChange={(event) => {
          setLast(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="E-mail..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
        onClick={() => createUser({ variables: { firstName, lastName } })}
      >
        Create User
      </button>
    </div>
  );
};

export default NewUser;

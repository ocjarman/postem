import React from "react";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPDATE_USER_MUTATION = gql`
  mutation UpdateProfile($firstName: String, $lastName: String) {
    updateProfile(firstName: $firstName, lastName: $lastName) {
      code
    }
  }
`;

const UpdateUsername = () => {
  const { user } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(`${user.me.firstName}`);
  const [lastName, setLastName] = useState(`${user.me.lastName}`);
  // const [email, setEmail] = useState("");
  const [updateUserInfo, { data, error, loading }] =
    useMutation(UPDATE_USER_MUTATION);

  if (loading) console.log("loading");
  if (error) console.log(error.message);
  if (data) console.log({ data });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateUserInfo({
          variables: { firstName, lastName },
        });
        // dispatch(setFirstName(newFirstName));
        // dispatch(setLastName(newLastName));
      }}
    >
      <TextField
        style={{ width: "200px" }}
        type="text"
        label="First Name"
        variant="outlined"
        defaultValue={`${user.me.firstName}`}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Last Name"
        variant="outlined"
        defaultValue={`${user.me.lastName}`}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        UPDATE
      </Button>
    </form>
  );
};

export default UpdateUsername;

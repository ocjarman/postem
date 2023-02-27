import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { setFirstName, setLastName } from "../../../store/userSlice";
const UPDATE_USER_MUTATION = gql`
  mutation UpdateProfile($firstName: String, $lastName: String) {
    updateProfile(firstName: $firstName, lastName: $lastName) {
      code
    }
  }
`;

const UpdateUsername = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
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
          variables: { firstName: newFirstName, lastName: newLastName },
        });
        dispatch(setFirstName(newFirstName));
        dispatch(setLastName(newLastName));
      }}
    >
      <TextField
        style={{ width: "200px" }}
        type="text"
        label="First Name"
        variant="outlined"
        defaultValue={firstName}
        onChange={(e) => setNewFirstName(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Last Name"
        variant="outlined"
        defaultValue={lastName}
        onChange={(e) => setNewLastName(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        UPDATE
      </Button>
    </form>
  );
};

export default UpdateUsername;

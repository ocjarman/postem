import React from "react";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

const UpdateUsername = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <form>
      <TextField
        style={{ width: "200px" }}
        type="text"
        label="First Name"
        variant="outlined"
        defaultValue={`${user.me.firstName}`}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Last Name"
        variant="outlined"
        defaultValue={`${user.me.lastName}`}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="E-mail"
        variant="outlined"
        defaultValue={
          user.me.email ? `${user.me.email}` : "please enter email!"
        }
      />
      <br />
      <Button variant="contained" color="primary">
        UPDATE
      </Button>
    </form>
  );
};

export default UpdateUsername;

import React from "react";
import {
    Table,
    TableHead,
    Avatar,
    TableRow,
    TableBody,
    TableCell,
    Link,
    TableContainer,
    Box
} from '@mui/material';
import useAuth from "../../hooks/useAuth";

function UserTable({users}) {
    const {user} = useAuth();
    const currentUserId = user._id;

  return (
    <div>
      <h6>UserTable: {users?.length}</h6>
    </div>
  );
}

export default UserTable;

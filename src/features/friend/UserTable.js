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
  Box,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";

function UserTable({ users }) {
  const { user } = useAuth();
  const currentUserId = user._id;

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: { xs: "20%", sm: "25%" } }}>
                Name
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Email
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Job Title
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" }, width: '20%' }}>
                Status
              </TableCell>
              <TableCell sx={{ width: { xs: "20%", sm: "25%" } }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user) => {
                return (
                    <TableRow key={user._id} hover>
                        <TableCell
                            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                        >
                            <Avatar
                                alt={user.name}
                                src={user.avatarUrl}
                                sx={{mr: 2}}
                            />
                            <Link 
                                variant='subtitle2'
                                sx={{fontWeight: 600}}
                                component={RouterLink}
                                to={`/user/${user._id}`}
                            >
                            {user.name}
                            </Link>
                        </TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserTable;

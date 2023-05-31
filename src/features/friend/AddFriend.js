import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Card,
  Container,
  TablePagination,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import UserTable from "./UserTable";
import { getUsers } from "./friendSlice";

function AddFriend() {
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { currentPageUsers, usersById, totalUsers } = useSelector(
    (state) => state.friend
  );

  const users = currentPageUsers.map((userId) => usersById[userId]);
  const dispatch = useDispatch();

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0);
    };

  useEffect(() => {
    dispatch(getUsers({ filterName, page: page + 1, limit: rowsPerPage }));
  }, [filterName, page, rowsPerPage, dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        AddFriend
      </Typography>
      <Card sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
            <SearchInput handleSubmit={handleSubmit} />

            <Typography
              variant="subtitle"
              sx={{ color: "text.secondary", ml: 1 }}>
              {totalUsers > 1
                ? `${totalUsers} users found`
                : totalUsers === 1
                ? `${totalUsers} user found`
                : "No users found"}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <TablePagination
              sx={{}}
              component="div"
              count={totalUsers ? totalUsers : 0}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Stack>
        </Stack>

        <UserTable users={users}/>
      </Card>
    </Container>
  );
}

export default AddFriend;

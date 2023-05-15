import { Stack, Box } from "@mui/material";
import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import {Outlet} from "react-router-dom";

function MainLayout() {
  return (
    <Stack sx={{minHeigh: '100vh'}}>
      <MainHeader />
      <Outlet/>
      <Box sx={{flexGrow: 1}}/>
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;

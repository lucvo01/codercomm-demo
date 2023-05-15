import React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import AccountPage from "../layouts/AccountPage";
import HomePage from "../layouts/HomePage";
import LoginPage from "../layouts/LoginPage";
import NotFoundPage from "../layouts/NotFoundPage";
import RegisterPage from "../layouts/RegisterPage";
import UserProfilePage from "../layouts/UserProfilePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="user/:userId" element={<UserProfilePage />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="account" element={<RegisterPage />} />
        <Route path="user/:userId" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

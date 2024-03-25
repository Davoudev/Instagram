import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthPage />} path="/auth" />
        <Route element={<ProfilePage />} path="/:username" />
      </Routes>
    </PageLayout>
  );
};

export default App;

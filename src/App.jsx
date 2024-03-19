import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import HomePage from "./components/HomePage/HomePage";
import PageLayout from "./Layout/PageLayout";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthPage />} path="/auth" />
      </Routes>
    </PageLayout>
  );
};

export default App;

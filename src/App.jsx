import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthPage />} path="/auth" />
      </Routes>
    </>
  );
};

export default App;

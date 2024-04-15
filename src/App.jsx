import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route
          element={authUser ? <HomePage /> : <Navigate to={"/auth"} />}
          path="/"
        />
        <Route
          element={!authUser ? <AuthPage /> : <Navigate to={"/"} />}
          path="/auth"
        />
        <Route element={<ProfilePage />} path="/:username" />
      </Routes>
    </PageLayout>
  );
};

export default App;

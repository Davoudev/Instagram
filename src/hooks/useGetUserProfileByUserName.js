import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/useUserProfileStore";
import { query, where, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserProfileByUserName = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapShot = await getDocs(q);
        if (querySnapShot.empty) return setUserProfile(null);
        let userDoc;
        querySnapShot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
        console.log("changed");
      }
    };
    getUserProfile();
  }, [setUserProfile, showToast, username]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUserName;

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();

  const signup = async (inputes) => {
    if (
      !inputes.email ||
      !inputes.password ||
      !inputes.username ||
      inputes.fullname
    ) {
      showToast("Erorr", "please fill all the fields", "error");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputes.email,
        inputes.password
      );
      if (!newUser || error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputes.email,
          username: inputes.username,
          fullName: inputes.fullName,
          bio: "",
          proflePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;

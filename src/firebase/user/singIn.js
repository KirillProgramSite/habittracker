import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const logIn = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Пользователь вошел в систему:", user);
    })
    .catch((error) => {
      console.error("Ошибка при входе:", error);
    });
};

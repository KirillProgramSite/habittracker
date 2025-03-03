import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebaseConfig"
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (email, password, username) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            username: username,
        })

        alert("Успешно")
    } catch(err) {
        console.error(err)
    }
}
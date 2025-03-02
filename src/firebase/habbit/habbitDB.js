import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const habbitCollectionRef = collection(db, "habbit");

export const getHabbits = async () => {
  try {
    const data = await getDocs(habbitCollectionRef);
    const filtredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filtredData;
  } catch (err) {
    console.error(`Error in farebase: ${err}`);
  }
};

import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {Recipe } from "../types/recipe";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addProduct = async (product: Omit<Recipe, "id">) => {
  try {
    const where = collection(db, "recipe");
    await addDoc(where, product);
    console.log("Añadido");
  } catch (error) {
    console.error(error);
  }
};

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "recipe"));
  const transformed: Array<Recipe> = [];

  querySnapshot.forEach((doc:any) => {
    const data: Omit<Recipe, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

export default {
  addProduct,
  getProducts,
};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAY7zwtD0W0gzcPoodZw_UXoVCveO3fJ7o",
  authDomain: "shoe-8cf4d.firebaseapp.com",
  projectId: "shoe-8cf4d",
  storageBucket: "shoe-8cf4d.appspot.com",
  messagingSenderId: "147583165989",
  appId: "1:147583165989:web:dc167d94fb0778a76841cc",
  measurementId: "G-68GWT27SXQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const shoeCollectionRef = collection(db, "shoes");

export const auth = getAuth(app);

export async function getShoes() {
  const querySnapshot = await getDocs(shoeCollectionRef); 
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id:doc.id
  }))
  return dataArr
}



export async function getShoe(id:string) {
  const docRef = doc(db, "shoes", id)
  const shoeSnapshot = await getDoc(docRef)
  return {
    ...shoeSnapshot.data(),
    id:shoeSnapshot.id
  }
}



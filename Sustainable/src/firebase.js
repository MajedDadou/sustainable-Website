import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  
  databaseURL: "https://contact-form-fcdaf-default-rtdb.europe-west1.firebasedatabase.app/",

};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push };
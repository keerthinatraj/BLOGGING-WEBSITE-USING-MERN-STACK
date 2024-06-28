import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "1214243",
  authDomain: "mern-blog-9e97b.firebaseapp.com",
  projectId: "mern-blog-9e97b",
  storageBucket: "mern-blog-9e97b.appspot.com",
  messagingSenderId: "146518715827",
  appId: "1:146518715827:web:f3d4aa6136a905be11efc6"
};

export const app = initializeApp(firebaseConfig);
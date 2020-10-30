import React from "react";

import Layout from "./components/Layout";
import Main from "./components/Main";

import firebase from "firebase/app";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyA8xn5bp-1YcSYiUwesEEeu5AN9m3XUVZU",
  authDomain: "phasmodetective.firebaseapp.com",
  databaseURL: "https://phasmodetective.firebaseio.com",
  projectId: "phasmodetective",
  storageBucket: "phasmodetective.appspot.com",
  messagingSenderId: "518405251228",
  appId: "1:518405251228:web:fb935a4a3401dd04774d59",
  measurementId: "G-MEYR4X3JHC",
});

firebase.analytics();

const App = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default App;

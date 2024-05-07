/* @refresh reload */
import { render } from "solid-js/web";
import { initializeApp } from "firebase/app";
import { FirebaseProvider } from "solid-firebase";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

const app = initializeApp({
  projectId: "electron-2242",
  apiKey: "AIzaSyD4nAc4pPLsq4Pip_aWGNFflf_74BwXaY0",
  authDomain: "electron-2242.firebaseapp.com",
  storageBucket: "electron-2242.appspot.com",
  messagingSenderId: "488588053584",
  appId: "1:488588053584:web:0e328c8345f53c0a96d555",
  measurementId: "G-58RVDNSDZ1",
});

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <FirebaseProvider app={app}>
      <App />
    </FirebaseProvider>
  ),
  root!,
);

import type { Component, Match, Switch } from "solid-js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuth, useFirebaseApp } from "solid-firebase";

import logo from "./logo.svg";
import styles from "./App.module.css";

function Login() {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider());
  return <button onClick={signIn}>Sign In with Google</button>;
}

const User: Component = ({ data }) => {
  return (
    <ul>
      <li>
        <label>name:</label> {data.displayName}
      </li>
      <li>
        <label>email:</label> {data.email}
      </li>
    </ul>
  );
};

const App: Component = () => {
  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));

  return (
    <Switch fallback={<Login />}>
      <Match when={state.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={state.error}>
        <Login />
      </Match>
      <Match when={state.data}>
        User: <User data={state.data} />
      </Match>
    </Switch>
  );
};

export default App;

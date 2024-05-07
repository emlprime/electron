import type { Component, Match, Switch } from "solid-js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

import { useAuth, useFirebaseApp, useFirestore } from "solid-firebase";
import { fetchGames } from "./fetchGames";
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

  const { games, refreshGames } = fetchGames(app);
  console.log("games", games());
  return (
    <section>
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
      <div>{games.data}</div>
    </section>
  );
};

export default App;
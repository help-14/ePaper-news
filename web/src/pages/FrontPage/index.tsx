import type { Component } from "solid-js";

import styles from "./index.module.css";
import Div100vh from "solidjs-div-100vh";

const App: Component = () => {
  return (
    <Div100vh>
      <div class={styles.App}>
        <header class={styles.header}>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
    </Div100vh>
  );
};

export default App;

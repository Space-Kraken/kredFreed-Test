import React from 'react';
import Router from "./router";
import { UI } from "./components";

function App() {
  return (
    <UI.Organisms.Base>
      <main>
        <Router />
      </main>
    </UI.Organisms.Base>
  );
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import MoviesProvider from "./contexts/movies-context";

function App() {
  const [fullName, setFullName] = useState("Murat Özenç");

  return (
    <MoviesProvider>
      <Header fullName={fullName} />
      <Main changeName={setFullName} />
    </MoviesProvider>
  );
}

export default App;

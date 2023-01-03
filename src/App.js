import MoviesProvider from "./contexts/movies-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path={"about-us"} element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;

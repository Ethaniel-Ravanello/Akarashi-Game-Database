import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Layout from "./Component/Layout";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Browse = lazy(() => import("./Pages/Browse"));
const Genres = lazy(() => import("./Pages/Genres"));
const GenresDetail = lazy(() => import("./Pages/GenresDetail"));

function App() {
  return (
    <Suspense fallback={"LOADINGG..."}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/genres/:genresdetail" element={<GenresDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Layout from "./Component/Layout";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Browse = lazy(() => import("./Pages/Browse"));

function App() {
  return (
    <Suspense fallback={"LOADINGG..."}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

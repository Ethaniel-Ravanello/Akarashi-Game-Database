import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Browse = lazy(() => import("./Pages/Browse"));

function App() {
  return (
    <Suspense fallback={"LOADINGG..."}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

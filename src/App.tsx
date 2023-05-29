import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Component/Layout";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Browse = lazy(() => import("./Pages/Browse"));
const Search = lazy(() => import("./Pages/Search"));

const Games = lazy(() => import("./Pages/Games/Games"));
const GamesDetail = lazy(() => import("./Pages/Games/GamesDetail"));

const Genres = lazy(() => import("./Pages/Genres/Genres"));
const GenresDetail = lazy(() => import("./Pages/Genres/GenresDetail"));

const Developer = lazy(() => import("./Pages/Developer/Developer"));
const DeveloperDetail = lazy(() => import("./Pages/Developer/DeveloperDetail"));

const Platforms = lazy(() => import("./Pages/Platforms/Platforms"));
const PlatformsDetail = lazy(() => import("./Pages/Platforms/PlatformsDetail"));

const Publishers = lazy(() => import("./Pages/Publishers/Publishers"));
const PublishersDetail = lazy(
  () => import("./Pages/Publishers/PublishersDetail")
);

const Stores = lazy(() => import("./Pages/Stores/Stores"));
const StoresDetail = lazy(() => import("./Pages/Stores/StoresDetail"));

const Tags = lazy(() => import("./Pages/Tags/Tags"));
const TagsDetail = lazy(() => import("./Pages/Tags/TagsDetail"));

function App() {
  return (
    <Suspense fallback={"LOADINGG..."}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/search" element={<Search />} />

            <Route path="/games" element={<Games />} />
            <Route path="/games/:gamesdetail" element={<GamesDetail />} />

            <Route path="/genres" element={<Genres />} />
            <Route path="/genres/:genresdetail" element={<GenresDetail />} />

            <Route path="/developers" element={<Developer />} />
            <Route
              path="/developers/:developerdetail"
              element={<DeveloperDetail />}
            />

            <Route path="/platforms" element={<Platforms />} />
            <Route
              path="/platforms/:platformsdetail"
              element={<PlatformsDetail />}
            />

            <Route path="/publishers" element={<Publishers />} />
            <Route
              path="/publishers/:publishersdetail"
              element={<PublishersDetail />}
            />

            <Route path="/stores" element={<Stores />} />
            <Route path="/stores/:storesdetail" element={<StoresDetail />} />

            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tagsdetail" element={<TagsDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

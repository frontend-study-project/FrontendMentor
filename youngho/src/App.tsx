import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStorage from "./contexts/GlobalContext";
import Home from "./pages/home/index";
import Details from "./pages/detail/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="rest-countries-api-with-color-theme-switcher"
            element={<Home />} /* this route is only for use on GitHub Pages */
          />
          <Route path="/:name" element={<Details />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;

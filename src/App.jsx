import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Homepage from "./pages/Homepage";
import NoPageOne from "./pages/noPageOne";
import NoPageTwo from "./pages/noPageTwo";
import NoPageThree from "./pages/noPageThree";
import FinalPage from "./pages/Final";
import YesPage from "./pages/YesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <LoadingBar color="#08b4e3" height={3} progress={"NAN"} onLoaderFinished={"NAN"} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/yes" element={<YesPage />} />
          <Route path="/no1" element={<NoPageOne />} />
          <Route path="/no2" element={<NoPageTwo />} />
          <Route path="/no3" element={<NoPageThree />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

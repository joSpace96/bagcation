import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/BoardPage/Post/Post";
import BoardList from "./Components/BoardPage/BoardList/BoardList";
import GuidePage from "./Components/GuidePage/GuidePage";
import Planner from "./Components/PlannerPage/Planner";
import Ledger from "./Components/LedgerPage/Ledger";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/gallery/detail" element={<Post />} />
          <Route path="/gallery/" element={<BoardList />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

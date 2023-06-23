import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/BoardPage/Post/Post";
import GuidePage from "./Components/GuidePage/GuidePage";
import Planner from "./Components/PlannerPage/Planner";
import Ledger from "./Components/LedgerPage/Ledger";
import Login from "./Components/LoginPage/Login";
import Africa from "./Components/MainPage/ImageGrid/InfoPage/Africa/Africa";
import Oceania from "./Components/MainPage/ImageGrid/InfoPage/Oceania/Oceania";
import America from "./Components/MainPage/ImageGrid/InfoPage/America/America";
import Asia from "./Components/MainPage/ImageGrid/InfoPage/Asia/Asia";
import Europe from "./Components/MainPage/ImageGrid/InfoPage/Europe/Europe";
import PlannerBoard from "./Components/PlannerPage/PlannerBoard";
import RedirectPage from "./Components/LoginPage/RedirectPage";
import Register from "./Components/LoginPage/RegisterPage/Register";
import PlannerDetail from "./Components/PlannerPage/PlannerDetail/PlannerDetail";
import PlannerTest from "./Components/PlannerPage/PlannerDetail/PlannerTest";
import PlannerPost from "./Components/PlannerPage/PlannerPost/PlannerPost";
import Profile from "./Components/ProfilePage/Profile";
import Review from "./Components/ReviewPage/Review";
import EditReview from "./Components/ReviewPage/EditReview";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/planner/map/detail" element={<PlannerDetail />} />
          <Route path="/planner/map" element={<Planner />} />
          <Route path="/planner/post/:idx" element={<PlannerPost />} />
          <Route path="/planner" element={<PlannerBoard />} />
          <Route path="/mypage/:idx" element={<Profile />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/reivew/detail/:idx" element={<Post />} />
          <Route path="/review/edit" element={<EditReview />} />
          <Route path="/review" element={<Review />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakao-callback" element={<RedirectPage />} />
          <Route path="/info/africa" element={<Africa />} />
          <Route path="/info/oceania" element={<Oceania />} />
          <Route path="/info/america" element={<America />} />
          <Route path="/info/asia" element={<Asia />} />
          <Route path="/info/europe" element={<Europe />} />
          <Route path="/test" element={<PlannerTest />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

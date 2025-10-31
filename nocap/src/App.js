import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import My from "./pages/My";
import LocalLogin from "./pages/LocalLogoin";
import Search from "./pages/Search";
import Recent from "./pages/Recent";
import AnalRec from "./pages/AnalRec";
import Bookmark from "./pages/Bookmark";
import Comment from "./pages/Comment";
import Setting from "./pages/Setting";
import News from "./pages/News";
import NDetail from "./pages/NDetail";
import Loading from "./pages/Lodaing";
import PFind from "./pages/PFind";
import Reset from "./pages/Reset";
import PSuccess from "./pages/PSuccess";
import Edit from "./pages/Edit";
import Payment from "./pages/Payment";
import Inquiry from "./pages/Inquiry";
import InquiryDet from "./pages/InquiryDet";
import Analysis from "./pages/Analysis";
import Premium from "./pages/Premium";
import Article from "./pages/Article";
import InquiryCom from "./pages/InquiryCom";
import SResult from "./pages/SResult";
import NSearch from "./pages/NSearch";
import Introduce from "./pages/Introduce";

// ✅ 페이지 전환용 라우트 컴포넌트
function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 기본 메인 페이지 */}
        <Route path="/" element={<Main />} />

        {/* ✅ Search 페이지만 모션효과 추가 */}
        <Route
          path="/search"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.25 }}
            >
              <Search />
            </motion.div>
          }
        />

        {/* 나머지 라우트들은 그대로 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/success" element={<Success />} />
        <Route path="/find" element={<PFind />} />
        <Route path="/find/success" element={<PSuccess />} />
        <Route path="/find/reset" element={<Reset />} />
        <Route path="/my" element={<My />} />
        <Route path="/login/local" element={<LocalLogin />} />
        <Route path="/my/recent" element={<Recent />} />
        <Route path="/my/analysis" element={<AnalRec />} />
        <Route path="/my/bookmark" element={<Bookmark />} />
        <Route path="/my/comment" element={<Comment />} />
        <Route path="/my/setting" element={<Setting />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/detail" element={<NDetail />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/my/edit" element={<Edit />} />
        <Route path="/my/payment" element={<Payment />} />
        <Route path="/my/inquiry" element={<Inquiry />} />
        <Route path="/my/inquiry/comment" element={<InquiryCom />} />
        <Route path="/my/inquiry/write" element={<InquiryDet />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/analysis/article" element={<Article />} />
        <Route path="/search/result" element={<SResult />} />
        <Route path="/news/search" element={<NSearch />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

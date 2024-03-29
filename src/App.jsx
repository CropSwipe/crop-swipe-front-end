import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage"
import BoardPage from "./pages/BoardPage/BoardPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import PostView from "./components/Board/PostView";
import PostForm from "./components/Board/PostForm";
import KakaoCallback from "./components/Auth/SignIn/KakaoCallback";
import DetailLog from "./components/Auth/SignIn/DetailLog";
import TransactionStart from "./pages/Transaction/TransactionStart";
import TransactionForm from "./pages/Transaction/TransactionForm";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/post/:postId" element={<PostView />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/productstart" element={<TransactionStart />} />
          <Route path="/productform" element={<TransactionForm />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/auth" element={<KakaoCallback />} />
          <Route path="/detaillog" element={<DetailLog />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
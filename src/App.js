import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./components/Info";
import Header from "./components/Headbar";
import Home from "./Home";
import MyPage from "./MyPage";
import Img from "./components/Img";
import Time from "./components/Time";
function App() {
  return (
    // 첨 페이지로 가기, 오늘 할 운동, 운동 자극 사진, 운동 기록? < 이건 일단 나중에 생각하기 앞에 3가지 먼저 구현하기
    // 홈으로 가면 홈 사진필요 홈 사진을 홈 컴포넌트에 넣어야 함 그래야 홈 눌럿을 때 사진 나옴 그러면
    // 홈 화면과 첫 화면을 동일 하게 만든다 그래야 홈 눌렀을 때 첫 화면으로 온 것 처럼 되니까 !!!
    <div className="App">
      <div>
        <h1>오늘 운동 뭐 하지?</h1>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/img" element={<Img />} />
          <Route path="/time" element={<Time />} />
        </Routes>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import My from "./pages/My";
import LocalLogin from "./pages/LocalLogoin";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/success" element={<Success />} />
        <Route path="/my" element={<My />} />
        <Route path="/login/local" element={<LocalLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

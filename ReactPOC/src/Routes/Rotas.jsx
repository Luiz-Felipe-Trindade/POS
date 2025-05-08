import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import {Home} from "../components/Home/index"
export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { RecoverPassword} from "../components/RecoverPassword/RecoverPassword";
import {Home} from "../components/Home/index"

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/RecoverPassword" element={<RecoverPassword />}></Route>

        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

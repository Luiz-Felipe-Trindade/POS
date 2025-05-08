import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import {Home} from "../components/Home/index"
import { RecoverPassword} from "../components/RecoverPassword/RecoverPassword";
import { Cadastro } from "../components/CadastroEmpresa/Cadastro";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/RecoverPassword" element={<RecoverPassword />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>


        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

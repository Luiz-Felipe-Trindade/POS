import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

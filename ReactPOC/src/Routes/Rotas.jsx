import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { RecoverPassword} from "../components/RecoverPassword/RecoverPassword";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/RecoverPassword" element={<RecoverPassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

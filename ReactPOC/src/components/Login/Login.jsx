import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(email);
    console.log(senha);

    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="title">Login Sistema</h1>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            required
          />
        </div>

        <button type="submit" className="button">
          Entrar
        </button>
        <NavLink to={"/RecoverPassword"}>Esqueci a senha</NavLink>
        <NavLink to={"/cadastro"}>Criar Conta</NavLink>
      </form>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
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
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>

          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

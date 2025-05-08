import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { useState } from "react";
export const Cadastro = () => {
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
        <h1 className="title">Cadastro Empresa</h1>

        <div>
          <label htmlFor="cnpj">CNPJ: </label>

          <input
            name="cnpj"
            id="cnpj"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="form">Nome Fantasia: </label>
          <input
            name="nome"
            id="nome"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

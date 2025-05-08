import React from 'react'
import "./RecoverPassword.css";

import { useState } from 'react';

export const RecoverPassword = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
    console.log(email);

    (e).preventDefault();
    console.log("Enviando link de confirmação");
}

  return (
    <div className="recover-container">
        <form className="card" onSubmit={handleSubmit}>
            <h2>Recuperação de Senha</h2>
            <p>Digite seu e-mail para receber um link de recuperação de senha</p>

            <label htmlFor="email"><strong>E-mail</strong></label>
            <div className="input-group">
                <input
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required
                />
            </div>

            <button type="submit" className="recover-button">
                Enviar link de recuperação
            </button>
        </form>
    </div>
  )
}

export default RecoverPassword
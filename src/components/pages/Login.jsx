import React, { useState } from "react";
import Default from "../templates/Default";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const cadLogin = (event) => {
    event.preventDefault();

    fetch(`https://cadusers.onrender.com/user/login`, {
      method: "POST",
      body: JSON.stringify({ user, password }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setUser("");
      setPassword("");
    });
  };

  return (
    <Default>
      <main style={{ margin: "2%" }}>
        <form onSubmit={cadLogin} id="formLogin">
          <h2 style={{ color: "white" }}>Login</h2>
          <div>
            <label style={{ color: "white" }}>E-mail</label>
            <input
              value={user}
              onChange={(event) => setUser(event.target.value)}
              type="text"
              className="form-control"
              id="nomeProd"
              placeholder="Insira seu e-mail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="marcaProd"
              className="form-label"
              style={{ color: "white" }}
            >
              Senha
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
              className="form-control"
              id="marcaProd"
              placeholder="Insira sua Senha"
            />
          </div>

          <button
            className="btn btn-lg btn-outline-success"
            style={{ marginTop: "1.5%" }}
          >
            Entrar
          </button>
        </form>
      </main>
    </Default>
  );
}

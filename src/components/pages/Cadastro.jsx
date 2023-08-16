import React, { useState, useEffect } from "react";
import Default from "../templates/Default";

export default function Cadastro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setcomplement] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  useEffect(() => {
    fetch(`https://cadusers.onrender.com/create/getall`)
      .then((response) => response.json())
      .then((data) => {
        const listzipcode = data;

        //listzipcode.map((zipcodes) => console.log(zipcodes.marca));
        console.log(listzipcode);
      });
  }, []);

  const cadUser = (event) => {
    event.preventDefault();

    fetch(`https://cadusers.onrender.com/create/user`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        cpf,
        email,
        zipcode,
        street,
        number,
        complement,
        neighborhood,
        password,
        confpassword,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setFirstName("");
      setLastName("");
      setCpf("");
      setZipcode("");
      setStreet("");
      setNeighborhood("");
      setNumber("");
      setcomplement("");
      setEmail("");
      setPassword("");
      setConfPassword("");
      setStreet("");
    });
  };

  return (
    <Default>
      <main style={{ margin: "2%" }}>
        <form onSubmit={cadUser} id="formCadastroUsuario">
          <h2
            style={{
              color: "white",
              marginLeft: "60%",
              transform: "translateX(-50%)",
            }}
          >
            Cadastro de Usuário
          </h2>
          <div className="envelopeForm">
            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                CPF
              </label>
              <input
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                type="text"
                className="form-control"
                id="cpfUsr"
                placeholder="Insira seu CPF"
              />
            </div>
            <div className="lineForm">
              <div className="col-5">
                <div>
                  <label style={{ color: "white" }}>Nome</label>
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    type="text"
                    className="form-control"
                    id="nomeProd"
                    placeholder="Insira seu nome"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="col-6" id="lnUsr">
                  <label style={{ color: "white" }}>Sobrenome</label>
                  <input
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Insira seu sobrenome"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                E-mail
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Insira seu E-mail"
              />
            </div>
            <div className="lineForm">
              <div className="col-6">
                <label className="form-label" style={{ color: "white" }}>
                  Cadastrar uma Senha
                </label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Insira uma senha"
                />
              </div>

              <div className="col-6">
                <label className="form-label" style={{ color: "white" }}>
                  Confirmar Senha
                </label>
                <input
                  value={confpassword}
                  onChange={(event) => setConfPassword(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Repita sua senha"
                />
              </div>
            </div>
            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                CEP
              </label>
              <input
                value={zipcode}
                onChange={(event) => setZipcode(event.target.value)}
                type="text"
                className="form-control"
                id="zipcodeUsr"
                placeholder="Insira o cep"
              />
            </div>
            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                Rua
              </label>
              <input
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Insira o nome da rua"
              />
            </div>

            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                Bairro
              </label>
              <input
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Insira o bairro"
              />
            </div>
            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                complemento
              </label>
              <input
                value={complement}
                onChange={(event) => setcomplement(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Insira o complemento"
              />
            </div>
          </div>
          <button
            className="btn btn-lg btn-outline-success"
            style={{ marginTop: "1.5%" }}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Default>
  );
}

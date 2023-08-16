import React, { useState } from "react";
import Default from "../templates/Default";

export default function Admin() {
  const [prod, setProd] = useState("");
  const [marca, setMarca] = useState("");
  const [valor, setValor] = useState("");
  const [img, setImg] = useState("");

  const cadFormSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api-cadastro.onrender.com/create/prod`, {
      method: "POST",
      body: JSON.stringify({ prod, marca, valor, img }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setProd("");
      setMarca("");
      setValor("");
      setImg("");
    });
  };

  return (
    <Default>
      <main style={{ margin: "2%" }}>
        <form onSubmit={cadFormSubmit} id="formCadastroProdutos">
          <h2 style={{ color: "white" }}>Cadastro de produtos</h2>
          <div>
            <label style={{ color: "white" }}>Nome do produto</label>
            <input
              value={prod}
              onChange={(event) => setProd(event.target.value)}
              type="text"
              className="form-control"
              id="nomeProd"
              placeholder="Insira o nome do produto"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="marcaProd"
              className="form-label"
              style={{ color: "white" }}
            >
              Marca
            </label>
            <input
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
              type="text"
              className="form-control"
              id="marcaProd"
              placeholder="Insira a Marca"
            />
          </div>

          <div className="row g-3">
            <div className="col">
              <label
                htmlFor="generoSelect"
                className="form-label"
                style={{ color: "white" }}
              >
                Gênero
              </label>
              <select
                id="generoSelect"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecione o gênero da peça de roupa</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
                <option value="3">Unissex</option>
              </select>
            </div>
            <div className="col">
              <label
                htmlFor="valorProduto"
                className="form-label"
                style={{ color: "white" }}
              >
                Valor
              </label>
              <input
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                type="text"
                className="form-control"
                id="valorProduto"
                placeholder="Insira o valor da peça de roupa"
              />
            </div>
            <div className="col">
              <label className="form-label" style={{ color: "white" }}>
                Imagem
              </label>
              <input
                value={img}
                onChange={(event) => setImg(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Insira uma frase"
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

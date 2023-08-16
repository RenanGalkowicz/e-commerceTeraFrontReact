import React from "react";
import Default from "../templates/Default";

export default function Contato() {
  return (
    <Default>
      <main>
        <section id="formulario_contato">
          <form class="p-4 p-md-5 border rounded-3 form-login">
            <h2>Entre em contato conosco!</h2>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control mb-3"
                id="inputNome"
                placeholder="Nome Completo"
              />
              <label for="inputNome">Nome Completo</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="inputEmailCadastro"
                placeholder="Endereço de E-Mail"
              />
              <label for="inputEmailCadastro">Endereço de E-Mail</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="textarea"
                class="form-control mb-3"
                id="inputNome"
                placeholder="Mensagem"
              />
              <label for="inputNome">Mensagem</label>
            </div>
            <button class="btn btn-lg btn-outline-success" type="submit">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>
    </Default>
  );
}

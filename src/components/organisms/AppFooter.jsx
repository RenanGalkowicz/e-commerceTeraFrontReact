import React from "react";

import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
import telefone from "../../images/telefone.png";
import siteSeguro from "../../images/site-seguro red.png";
import meiosPagamento from "../../images/meios_pagamento red.jpg";

export default function AppFooter() {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm redessociais">
            <h5>Siga-nos nas Redes Sociais</h5>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
            <img src={telefone} alt="" />
          </div>
          <div className="col-sm" id="site_seguro">
            <img src={siteSeguro} alt="" />
          </div>
          <div className="col-sm" id="formas-pagto">
            <img src={meiosPagamento} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

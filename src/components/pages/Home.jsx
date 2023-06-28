/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import AppCarousel from "../organisms/AppCarousel";
import Default from "../templates/Default";

import Promo1 from "../../images/placeholders/promo1.png";
import Promo2 from "../../images/placeholders/promo2.png";
import Promo3 from "../../images/placeholders/promo3.png";

export default function Home() {
  return (
    <Default>
      <main>
        <AppCarousel />
        <section id="promocao">
          <h2>Promoções!</h2>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm">
                <a href="#">
                  <img className="img-fluid imgconteudo" src={Promo1} alt="" />
                </a>
              </div>
              <div className="col-sm">
                <a href="">
                  <img className="img-fluid imgconteudo" src={Promo2} alt="" />
                </a>
              </div>
              <div className="col-sm">
                <a href="">
                  <img className="img-fluid imgconteudo" src={Promo3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <h2>Produtos mais vendidos</h2>
        <section id="mais_vendidos">
          <div className="container text-center">
            <div
              className="row align-items-center"
              id="itensMaisVendidos"
              style={{ marginLeft: "8.5%" }}
            ></div>
          </div>
        </section>
      </main>
    </Default>
  );
}

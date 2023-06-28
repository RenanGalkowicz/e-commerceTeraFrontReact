/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import AppCarousel from "../organisms/AppCarousel";
import Default from "../templates/Default";

export default function Home() {
  return (
    <div>
      <Default>
        <main>
          <AppCarousel />
          <section>
            <div>
              <div className="col col-6 conteudo">
                <img src="images/proj2.png" alt="" className="imgconteudo" />
              </div>
              <div className="col col-6 conteudo">
                <img src="images/Proj1.png" alt="" className="imgconteudo" />
              </div>
              <div className="col col-12 conteudo3" style={{ widows: "50%" }}>
                <img src="images/proj3.png" alt="" className="imgconteudo3" />
              </div>
            </div>
          </section>
          <h2
            style={{ marginTop: "1%", marginLeft: "19%", alignItems: "center" }}
          >
            Produtos mais vendidos
          </h2>
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
    </div>
  );
}

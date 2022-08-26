import React from "react";

export default function Nombre() {
  return (
    <section className="info">
      <h1 className="nombre">Gato Guaton</h1>
      <h5 className="cargo">Frontend Developer</h5>
      <p className="pagina">Gatoweb</p>
      <div className="botones">
        <button className="email"><p className="textEmail">Email</p></button>
        <button className="linkedin"><p className="textlinkedin">LinkedIn</p></button>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="nome">Nome: </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <h2>Valores digitados</h2>
      <p>Nome: {nome}</p>
      <p>E-mail: {email}</p>
    </form>
  );
}


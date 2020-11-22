import { useState } from "react";

function NovaTarefa({
  addTarefa
}) {
  const [ texto, setTexto ] = useState();

  const handleTextoChange = (event) => {
    addTarefa(texto);
    setTexto('');
  }

  return (
    <div>
      <textarea
        value={texto}
        onChange={event => setTexto(event.target.value)}
      />
      <button
        onClick={handleTextoChange}
        type="button"
      >
        Adicionar
      </button>
    </div>
  );
}

export default NovaTarefa;

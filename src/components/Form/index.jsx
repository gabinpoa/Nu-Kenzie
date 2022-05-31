import "./styles.css";
import { useState } from "react";

export function Form({ listTransactions, setListTransactions }) {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const addListTransaction = () => {
    setListTransactions([
      ...listTransactions,
      {
        description: descriptionInput,
        value: typeInput === "Saída" ? `-${valueInput}` : valueInput,
        type: typeInput,
      },
    ]);
  };
  return (
    <form>
      <div className="containerDescription">
        <label for="description">Descrição</label>
        <input
          name="description"
          id="description"
          placeholder="Digite aqui sua descrição"
          type="text"
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div className="containerValue">
        <label for="value">Valor</label>
        <input
          onChange={(e) => setValueInput(e.target.value)}
          name="value"
          id="value"
          type="number"
        />
      </div>
      <div className="containerType">
        <label for="type">Tipo de valor</label>
        <select
          onClick={(e) => setTypeInput(e.target.value)}
          name="type"
          id="type"
        >
          <option>Saída</option>
          <option>Entrada</option>
        </select>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          addListTransaction();
        }}
        type="submit"
        className="submit"
      >
        Inserir valor
      </button>
    </form>
  );
}

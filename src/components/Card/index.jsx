import "./styles.css";

export function Card({ transaction }) {
  const { description, type, value } = transaction;
  return (
    <div className={type === "Entrada" ? "card entrada" : "card saida"}>
      <p className="description l-text">{description}</p>
      <p className="type s-text">{type}</p>
      <p className="value">{"R$ " + value}</p>
    </div>
  );
}

import "./styles.css";
import { Card } from "../Card";

export function List({ listTransactions }) {
  return (
    <div className="list">
      {listTransactions.map((transaction, index) => (
        <Card key={index} transaction={transaction} />
      ))}
    </div>
  );
}

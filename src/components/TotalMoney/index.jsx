import "./styles.css";

export function TotalMoney({ listTransactions }) {
  const calculateTotal = () => {
    return listTransactions.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.value);
    }, 0);
  };
  return (
    <div className="totalMoney">
      <p className="l-text totalValue">Valor total:</p>
      <p className="numValue">
        {listTransactions.length === 0 ? 0 : `$ ${calculateTotal()}`}
      </p>
      <p className="s-text help-text">O valor se refere ao saldo</p>
    </div>
  );
}

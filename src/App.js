import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import logo from "./img/nukenzie.svg";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo Nu Kenzie" />
      </header>
      <main>
        <div className="left-side">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="right-side">
          <List listTransactions={listTransactions} />
        </div>
      </main>
    </div>
  );
}

export default App;

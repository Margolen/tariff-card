import "./App.css";
import TariffCard from "./TariffCard";

function App() {
  return (
    <div className="app">
      <TariffCard
        title="Безлимитный 300"
        price="300"
        speed="10"
        info="Объем входящего трафика не ограничен"
        addClass="card1"
      />
      <TariffCard
        title="Безлимитный 450"
        price="450"
        speed="50"
        info="Объем входящего трафика не ограничен"
        addClass="card2"
      />
      <TariffCard
        title="Безлимитный 550"
        price="550"
        speed="100"
        info="Объем входящего трафика не ограничен"
        addClass="card3"
        selected
      />
      <TariffCard
        title="Безлимитный 1000"
        price="1000"
        speed="200"
        info="Объем входящего трафика не ограничен"
        addClass="card4"
      />
    </div>
  );
}

export default App;

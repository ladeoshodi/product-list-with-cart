import Cart from "./components/Cart";
import DessertList from "./components/dessertsPage/DessertList";

function App() {
  return (
    <div className="grid lg:grid-cols-[1fr_250px] gap-6">
      <section>
        <DessertList />
      </section>
      <section>
        <Cart />
      </section>
    </div>
  );
}

export default App;

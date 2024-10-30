import Cart from "./components/Cart";
import DessertList from "./components/dessertsPage/DessertList";

function App() {
  return (
    <div className="grid md:grid-cols-[1fr_280px] gap-6">
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

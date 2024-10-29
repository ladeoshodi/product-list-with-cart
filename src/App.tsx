import Cart from "./components/Cart";
import DessertList from "./components/dessertsPage/DessertList";

function App() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
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

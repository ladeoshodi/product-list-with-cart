import Cart from "./components/Cart";
import DessertList from "./components/dessertsPage/DessertList";

function App() {
  return (
    <div className="grid grid-cols-2 gap-2">
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

import { useState } from "react";
import Cart from "./components/Cart";
import DessertList from "./components/dessertsPage/DessertList";
import { ICart } from "./types/cart";
import { IDessert } from "./types/dessert";

function App() {
  const [cart, setCart] = useState<ICart>({});

  function addToCart(dessert: IDessert) {
    const updateCart = { ...cart };
    if (dessert.name in updateCart) {
      updateCart[dessert.name].push(dessert);
    } else {
      updateCart[dessert.name] = [dessert];
    }

    setCart(updateCart);
  }

  return (
    <div className="grid lg:grid-cols-[1fr_250px] gap-6">
      <section>
        <DessertList addToCart={addToCart} />
      </section>
      <section>
        <Cart cart={cart} />
      </section>
    </div>
  );
}

export default App;

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

  function removeCartItem(itemName: string, shouldRemoveAll = false) {
    const currentCart = { ...cart };
    if (currentCart[itemName].length <= 1 || shouldRemoveAll) {
      delete currentCart[itemName];
    } else {
      currentCart[itemName].pop();
    }

    setCart(currentCart);
  }

  return (
    <div className="grid lg:grid-cols-[1fr_250px] gap-6">
      <section>
        <DessertList
          cart={cart}
          addToCart={addToCart}
          removeCartItem={removeCartItem}
        />
      </section>
      <section>
        <Cart cart={cart} removeCartItem={removeCartItem} setCart={setCart} />
      </section>
    </div>
  );
}

export default App;

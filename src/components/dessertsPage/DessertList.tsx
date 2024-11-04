import desserts from "../../../data.json";
import { ICart } from "../../types/cart";
import { IDessert } from "../../types/dessert";
import Dessert from "./Dessert";

interface DessertListProps {
  cart: ICart;
  addToCart: (dessert: IDessert) => void;
  removeCartItem: (itemName: string, shouldRemoveAll?: boolean) => void;
}

function DessertList({ cart, addToCart, removeCartItem }: DessertListProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5 text-yellow-950">Desserts</h1>
      <section className="grid md:grid-cols-3 gap-4">
        {desserts.map((dessert) => {
          return (
            <Dessert
              key={dessert.id}
              dessert={dessert}
              cart={cart}
              addToCart={addToCart}
              removeCartItem={removeCartItem}
            />
          );
        })}
      </section>
    </>
  );
}

export default DessertList;

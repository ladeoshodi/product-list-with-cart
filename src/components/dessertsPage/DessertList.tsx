import desserts from "../../../data.json";
import { IDessert } from "../../types/dessert";
import Dessert from "./Dessert";

interface DessertListProps {
  addToCart: (dessert: IDessert) => void;
}

function DessertList({ addToCart }: DessertListProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5 text-yellow-950">Desserts</h1>
      <section className="grid md:grid-cols-3 gap-4">
        {desserts.map((dessert) => {
          return (
            <Dessert key={dessert.id} addToCart={addToCart} dessert={dessert} />
          );
        })}
      </section>
    </>
  );
}

export default DessertList;

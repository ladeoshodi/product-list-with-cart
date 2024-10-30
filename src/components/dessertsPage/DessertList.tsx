import desserts from "../../../data.json";
import Dessert from "./Dessert";

function DessertList() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5 text-yellow-950">Desserts</h1>
      <section className="grid md:grid-cols-3 gap-4">
        {desserts.map((dessert) => {
          return <Dessert key={dessert.id} {...dessert} />;
        })}
      </section>
    </>
  );
}

export default DessertList;

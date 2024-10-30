import desserts from "../../../data.json";
import Dessert from "./Dessert";

function DessertList() {
  return (
    <>
      <h1 className="text-3xl font-bold">Desserts</h1>
      <section className="grid md:grid-cols-3 gap-4">
        {desserts.map((dessert, key) => {
          return <Dessert key={key} {...dessert} />;
        })}
      </section>
    </>
  );
}

export default DessertList;

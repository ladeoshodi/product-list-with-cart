import desserts from "../../../data.json";
import Dessert from "./Dessert";

function DessertList() {
  return (
    <>
      <h1 className="text-3xl font-bold">Desserts</h1>
      {desserts.map((dessert, key) => {
        return <Dessert key={key} {...dessert} />;
      })}
    </>
  );
}

export default DessertList;

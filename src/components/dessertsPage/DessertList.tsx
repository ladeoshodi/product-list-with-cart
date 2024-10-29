import desserts from "../../../data.json";
import Dessert from "./Dessert";

console.log(desserts);

function DessertList() {
  return (
    <>
      <p>Desserts</p>
      {desserts.map((dessert, key) => {
        return <Dessert key={key} {...dessert} />;
      })}
    </>
  );
}

export default DessertList;

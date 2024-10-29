interface Iimage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IDessert {
  image: Iimage;
  name: string;
  category: string;
  price: number;
}

function Dessert({ image, name, category, price }: IDessert) {
  return <p>{name}</p>;
}

export default Dessert;

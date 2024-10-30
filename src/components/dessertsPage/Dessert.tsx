interface Iimage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IDessert {
  id: number;
  image: Iimage;
  name: string;
  category: string;
  price: number;
}

function Dessert({ id, image, name, category, price }: IDessert) {
  return (
    <div>
      <img
        src={image.desktop}
        alt={name}
        sizes="(max-width: 500px) 400px, (max-width: 800px) 424px, 480px"
        srcSet={`${image.mobile} 400w, ${image.tablet} 424w, ${image.desktop} 480w`}
      />
      <div className="mt-7">
        <h6 className="text-stone-400 text-sm">{category}</h6>
        <p className="font-semibold text-yellow-950">{name}</p>
        <p className=" text-rose-400 font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dessert;

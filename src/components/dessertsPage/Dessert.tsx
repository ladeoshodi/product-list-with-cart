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

interface IAddToCartButton {
  id: number;
}

function AddToCartButton({ id }: IAddToCartButton) {
  return (
    <button
      className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 border-2 rounded-3xl bg-white text-yellow-950 border-rose-400 py-2 px-6 w-4/5"
      type="button"
      data-id={id}
    >
      🛒 Add to Cart
    </button>
  );
}

function Dessert({ id, image, name, category, price }: IDessert) {
  return (
    <div>
      <div className="relative">
        <img src={image.desktop} alt={name} />
        <AddToCartButton id={id} />
      </div>
      <div className="mt-7">
        <h6 className="text-stone-400 text-sm">{category}</h6>
        <p className="font-semibold text-yellow-950">{name}</p>
        <p className=" text-rose-400 font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dessert;

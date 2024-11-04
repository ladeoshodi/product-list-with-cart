import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import { IDessert } from "../../types/dessert";

interface DessertProps {
  dessert: IDessert;
  addToCart: (dessert: IDessert) => void;
}

function Dessert({ addToCart, dessert }: DessertProps) {
  return (
    <div>
      <div className="relative">
        <img src={dessert.image.desktop} alt={dessert.name} />
        <button
          className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 border-2 rounded-3xl bg-white text-yellow-950 border-orange-700 py-2 px-6 w-4/5 addCartItem"
          type="button"
          onClick={() => addToCart(dessert)}
        >
          <div className="flex justify-center items-center gap-1">
            <span>
              <img src={addToCartIcon} />
            </span>{" "}
            Add to Cart
          </div>
        </button>
      </div>
      <div className="mt-7">
        <h6 className="text-stone-400 text-sm">{dessert.category}</h6>
        <p className="font-semibold text-yellow-950">{dessert.name}</p>
        <p className="text-orange-700 font-semibold">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Dessert;

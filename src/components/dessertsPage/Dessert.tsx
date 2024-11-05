import addToCartIcon from "/assets/images/icon-add-to-cart.svg";
import increaseQuantityIcon from "/assets/images/icon-increment-quantity.svg";
import decreaseQuantityIcon from "/assets/images/icon-decrement-quantity.svg";

import { IDessert } from "../../types/dessert";
import { ICart } from "../../types/cart";

interface AddToCartButton {
  dessert: IDessert;
  addToCart: (dessert: IDessert) => void;
}

interface DessertProps {
  dessert: IDessert;
  cart: ICart;
  addToCart: (dessert: IDessert) => void;
  removeCartItem: (itemName: string, shouldRemoveAll?: boolean) => void;
}

interface InCartButtonProp {
  quantity: number;
  dessert: IDessert;
  addToCart: (dessert: IDessert) => void;
  removeCartItem: (itemName: string, shouldRemoveAll?: boolean) => void;
}

function AddToCartButton({ addToCart, dessert }: AddToCartButton) {
  return (
    <button
      className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 border-2 rounded-3xl bg-white text-yellow-950 border-orange-700 py-2 px-6 w-4/5"
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
  );
}

function InCartButton({
  quantity,
  dessert,
  addToCart,
  removeCartItem,
}: InCartButtonProp) {
  return (
    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 border-2 rounded-3xl bg-orange-700 text-white border-orange-700 py-2 px-6 w-4/5">
      <div className="flex justify-center items-center">
        <button aria-label="Decrease Quantity" className="mr-auto scale-110">
          <img
            src={decreaseQuantityIcon}
            onClick={() => removeCartItem(dessert.name)}
          />
        </button>
        {quantity}
        <button aria-label="Increase Quantity" className="ml-auto scale-110">
          <img src={increaseQuantityIcon} onClick={() => addToCart(dessert)} />
        </button>
      </div>
    </div>
  );
}

function Dessert({ dessert, cart, addToCart, removeCartItem }: DessertProps) {
  return (
    <div>
      <div className="relative">
        <img src={dessert.image.desktop} alt={dessert.name} />
        {Object.keys(cart).includes(dessert.name) ? (
          <InCartButton
            quantity={cart[dessert.name].length}
            dessert={dessert}
            addToCart={addToCart}
            removeCartItem={removeCartItem}
          />
        ) : (
          <AddToCartButton addToCart={addToCart} dessert={dessert} />
        )}
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

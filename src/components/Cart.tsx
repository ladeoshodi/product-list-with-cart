import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";
import { ICart } from "../types/cart";
import { IDessert } from "../types/dessert";

import removeItemIcon from "../assets/images/icon-remove-item.svg";

interface CartProps {
  cart: ICart;
  removeCartItem: (itemName: string) => void;
}

function Cart({ cart, removeCartItem }: CartProps) {
  function getCartLength() {
    let total = 0;
    for (const item in cart) {
      total += cart[item].length;
    }

    return total;
  }
  function getCartTotal() {
    let totalPrice = 0;
    for (const item in cart) {
      totalPrice += cart[item].reduce((acc, curr) => acc + curr.price, 0);
    }

    return totalPrice.toFixed(2);
  }

  function getItemTotal(item: IDessert[]) {
    return item.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  }

  return (
    <section className="rounded-2xl bg-white p-4">
      <p className="text-orange-700 font-bold">Your Cart ({getCartLength()})</p>
      <div className="my-4">
        <div>
          {Object.keys(cart).map((itemName, idx) => {
            return (
              <div key={idx}>
                <div className="flex items-center">
                  <div className="text-xs">
                    <h4 className="text-yellow-950  font-semibold">
                      {itemName}
                    </h4>
                    <h6 className="flex">
                      <span className="text-orange-700 font-semibold mr-3">
                        {cart[itemName].length}x
                      </span>{" "}
                      <span className="text-stone-400 mr-3">
                        @ ${cart[itemName][0].price.toFixed(2)}
                      </span>{" "}
                      <span className="text-stone-400 font-semibold">
                        ${getItemTotal(cart[itemName])}
                      </span>
                    </h6>
                  </div>

                  <button
                    className="ml-auto removeCartItem"
                    onClick={() => removeCartItem(itemName)}
                  >
                    <img src={removeItemIcon} />
                  </button>
                </div>
                <hr className="my-4"></hr>
              </div>
            );
          })}
        </div>
        <div className="flex items-center">
          <span className="text-xs">Order Total</span>{" "}
          <span className="ml-auto font-bold text-lg">${getCartTotal()}</span>
        </div>
      </div>
      <div className="py-4 my-4 bg-rose-50 rounded-lg">
        <div className="flex justify-center items-center gap-1">
          <span>
            <img src={carbonNeutralIcon} />
          </span>{" "}
          <h6 className="text-xs text-center">
            This is a <span className="font-semibold">carbon-neutral</span>{" "}
            delivery
          </h6>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-full border-2 rounded-3xl bg-orange-700 text-white border-orange-700 py-2 px-6 text-sm"
          type="button"
        >
          Confirm Order
        </button>
      </div>
    </section>
  );
}

export default Cart;

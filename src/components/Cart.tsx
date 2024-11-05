import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ICart } from "../types/cart";
import { IDessert } from "../types/dessert";

import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";
import removeItemIcon from "/assets/images/icon-remove-item.svg";
import emptyCart from "/assets/images/illustration-empty-cart.svg";
import orderConfirmedIcon from "/assets/images/icon-order-confirmed.svg";

interface CartProps {
  cart: ICart;
  removeCartItem: (itemName: string, shouldRemoveAll?: boolean) => void;
  setCart: (cart: ICart) => void;
}

interface CartModalProp {
  cart: ICart;
  isOpen: boolean;
  closeModal: () => void;
  getCartTotal: () => string;
  getItemTotal: (item: IDessert[]) => string;
  setCart: (cart: ICart) => void;
}

function CartModal({
  cart,
  isOpen,
  closeModal,
  getCartTotal,
  getItemTotal,
  setCart,
}: CartModalProp) {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-lg w-80 md:w-96">
          <div className="mb-4">
            <img src={orderConfirmedIcon} />
          </div>
          <DialogTitle className="text-2xl text-yellow-950 font-bold mb-1">
            Order Confirmed
          </DialogTitle>
          <Description className="text-stone-400 text-sm">
            We hope you enjoy your food!
          </Description>

          <div className="my-6 bg-rose-50 p-4">
            {Object.keys(cart).map((itemName, idx) => {
              return (
                <div key={idx}>
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 mr-2"
                        src={cart[itemName][0].image.thumbnail}
                        alt={itemName}
                      />
                    </div>
                    <div className="text-xs">
                      <h4 className="text-yellow-950 font-semibold">
                        {itemName}
                      </h4>
                      <h6 className="flex">
                        <span className="text-orange-700 font-semibold mr-3">
                          {cart[itemName].length}x
                        </span>{" "}
                        <span className="text-stone-400 mr-3">
                          @ ${cart[itemName][0].price.toFixed(2)}
                        </span>
                      </h6>
                    </div>
                    <div className="text-yellow-950 font-semibold ml-auto text-sm">
                      ${getItemTotal(cart[itemName])}
                    </div>
                  </div>
                  <hr className="my-4"></hr>
                </div>
              );
            })}
            <div className="flex items-center">
              <span className="text-xs">Order Total</span>{" "}
              <span className="ml-auto font-bold text-lg text-yellow-950">
                ${getCartTotal()}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full border-2 rounded-3xl bg-orange-700 text-white border-orange-700 py-2 px-6 text-sm"
              type="button"
              onClick={() => {
                setCart({});
                closeModal();
              }}
            >
              Start New Order
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function Cart({ cart, removeCartItem, setCart }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
    <>
      <section className="rounded-2xl bg-white p-4">
        <p className="text-orange-700 font-bold">
          Your Cart (<span className="cartItemCount">{getCartLength()}</span>)
        </p>
        {getCartLength() > 0 ? (
          <>
            <div className="my-4">
              <div>
                {Object.keys(cart).map((itemName, idx) => {
                  return (
                    <div key={idx}>
                      <div className="flex items-center">
                        <div className="text-xs">
                          <h4 className="text-yellow-950 font-semibold">
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
                          aria-label="Remove Item"
                          className="ml-auto"
                          onClick={() => removeCartItem(itemName, true)}
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
                <span className="ml-auto font-bold text-lg text-yellow-950">
                  ${getCartTotal()}
                </span>
              </div>
            </div>
            <div className="py-4 my-4 bg-rose-50 rounded-lg">
              <div className="flex justify-center items-center gap-1">
                <span>
                  <img src={carbonNeutralIcon} />
                </span>{" "}
                <h6 className="text-xs text-center">
                  This is a{" "}
                  <span className="font-semibold">carbon-neutral</span> delivery
                </h6>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="w-full border-2 rounded-3xl bg-orange-700 text-white border-orange-700 py-2 px-6 text-sm"
                type="button"
                onClick={openModal}
              >
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <img src={emptyCart} />
            <h4 className="text-xs text-center text-[#87645a] font-medium">
              Your added items will be added here
            </h4>
          </div>
        )}
      </section>

      <CartModal
        cart={cart}
        isOpen={isOpen}
        closeModal={closeModal}
        getCartTotal={getCartTotal}
        getItemTotal={getItemTotal}
        setCart={setCart}
      />
    </>
  );
}

export default Cart;

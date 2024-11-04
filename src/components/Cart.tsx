import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";

function Cart() {
  return (
    <section className="rounded-2xl bg-white p-4">
      <p className="text-orange-700 font-bold">Your Cart</p>
      <div className="my-4">
        <div>{/* cart items */}</div>
        <div className="flex">
          Order Total <span className="ml-auto">total</span>
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

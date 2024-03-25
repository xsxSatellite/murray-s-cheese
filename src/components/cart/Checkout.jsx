import { useLoaderData } from "react-router-dom";
import { Minus } from "@phosphor-icons/react";

export default function Checkout() {
  const cheeses = useLoaderData();
  let subtotal = null;
  cheeses.forEach(cheese => {
    subtotal += cheese.price * cheese.quantity;
  });

  return (
    <div className="checkout">
      <div className="checkout__promotion">
        <p>Apply a promotional code</p>
        <form
          onClick={handleFormSubmission}
          className="checkout__promotion-form">
          <input type="text" placeholder="Enter code" />
          <button>Apply</button>
        </form>
      </div>
      <div className="checkout__info">
        <p>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </p>
        <p>
          <span>Taxes</span>
          <span>
            <Minus size="14px" />
          </span>
        </p>
        <p>
          <span>Shipping</span>
          <span>
            <Minus size="14px" />
          </span>
        </p>
        <p>
          <span>Pricing adjustments</span>
          <span>
            <Minus size="14px" />
          </span>
        </p>
      </div>
      <div className="checkout__total">
        <p>
          <span>Estimated total</span>
          <span>${subtotal}</span>
        </p>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

function handleFormSubmission(e) {
  e.preventDefault();
}

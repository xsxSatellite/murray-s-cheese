import { Form } from "react-router-dom";
import { Plus, Minus, X } from "@phosphor-icons/react";

export default function Item({
  cheese: { src, name, ingredients, price, unit, quantity },
  idx,
}) {
  const ingredientsStr = ingredients?.join(" / ");

  return (
    <article className="item">
      <section className="item__head">
        <img src={src} alt={name} className="item__face" />
      </section>
      <section className="item__body">
        <h4>{name}</h4>
        <p className="item__body-ingredients">{ingredientsStr}</p>
        <p className="item__body-price">
          <span>${price * quantity}</span>{" "}
          <span>
            (${price} / {unit})
          </span>
        </p>
        <Form method="post" className="item__body-panel">
          <button
            name="intent"
            value="increase"
            disabled={quantity >= 10 ? true : false}>
            <Plus size="16px" />
          </button>
          <span className="item__body-panel-quantity">
            {quantity} / {unit}
          </span>
          <button
            name="intent"
            value="decrease"
            disabled={quantity <= 1 ? true : false}>
            <Minus size="16px" />
          </button>
          <input type="text" name="idx" value={idx} readOnly />
        </Form>
        <Form method="post" className="delete-form">
          <button name="intent" value="delete">
            <span>
              <X size="20px" />
            </span>
            <span>Remove</span>
          </button>
          <input type="text" name="idx" value={idx} readOnly />
        </Form>
      </section>
    </article>
  );
}

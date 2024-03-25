import { useLoaderData } from "react-router-dom";
import Item from "../components/cart/Item";
import Checkout from "../components/cart/Checkout";

export default function Cart() {
  const cheeses = useLoaderData();

  if (!cheeses)
    return (
      <main className="cart">
        <h1>Go to home page choose some cheeses!</h1>
      </main>
    );

  return (
    <main className="cart">
      <div className="cart__content">
        <section className="cart__body">
          <h1>Your Cart</h1>
          {cheeses.length === 0 ? (
            <p>Go to home page choose some cheeses!</p>
          ) : (
            cheeses.map((cheese, idx) => (
              <Item key={idx} cheese={cheese} idx={idx} />
            ))
          )}
        </section>
        <section className="cart__foot">
          <Checkout />
        </section>
      </div>
    </main>
  );
}

function cartLoader() {
  const cheeses = JSON.parse(localStorage.getItem("cheeses"));

  return cheeses;
}

async function cartAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const cheeses = JSON.parse(localStorage.getItem("cheeses"));
  let newCheeses = null;
  let idx = Number(formData.get("idx"));

  switch (intent) {
    case "delete":
      newCheeses = cheeses.filter((cheese, index) => index !== idx);
      localStorage.setItem("cheeses", JSON.stringify(newCheeses));
      break;
    case "increase":
      cheeses.forEach((cheese, index) => {
        if (index === idx) {
          if (cheese.quantity < 10) cheese.quantity += 1;
        }
      });
      localStorage.setItem("cheeses", JSON.stringify(cheeses));
      break;
    case "decrease":
      cheeses.forEach((cheese, index) => {
        if (index === idx) {
          if (cheese.quantity > 1) cheese.quantity -= 1;
        }
      });
      localStorage.setItem("cheeses", JSON.stringify(cheeses));
      break;
  }

  return null;
}

export { cartLoader, cartAction };

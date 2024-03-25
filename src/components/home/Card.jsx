import { useRef, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ctx = {
  nameCharNum: 10,
  ingredientCharNum: 15,
  descCharNum: 15,
};

function reducer(state, event) {
  switch (event.type) {
    case "change_char_num":
      return {
        ...state,
        nameCharNum: event.data.nameCharNum,
        ingredientCharNum: event.data.ingredientCharNum,
        descCharNum: event.data.descCharNum,
      };
  }
}

function changeCharNum(nameCharNum, ingredientCharNum, descCharNum) {
  return {
    type: "change_char_num",
    data: {
      nameCharNum,
      ingredientCharNum,
      descCharNum,
    },
  };
}

export default function Card({ cheese }) {
  const [state, send] = useReducer(reducer, ctx);
  const ingredientRef = useRef(null);
  const { src, name, ingredients, desc, price, unit, to } = cheese;
  const nameStr = name.slice(0, state.nameCharNum);
  const intactIngredientStr = ingredients?.join(" / ");
  const ingredientStr = intactIngredientStr?.slice(0, state.ingredientCharNum);
  const descStr = desc?.slice(0, state.descCharNum);

  useEffect(() => {
    const ingredientsEl = ingredientRef.current;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const inlineSize = entry.borderBoxSize.at(0).inlineSize;

        if (inlineSize > 200) {
          send(changeCharNum(999, 999, 999));
        } else if (inlineSize > 190) {
          send(changeCharNum(40, 45, 45));
        } else if (inlineSize > 170) {
          send(changeCharNum(30, 35, 35));
        } else if (inlineSize > 150) {
          send(changeCharNum(20, 25, 25));
        } else {
          send(changeCharNum(10, 15, 15));
        }
      }
    });
    resizeObserver.observe(ingredientsEl);

    return () => resizeObserver.unobserve(ingredientsEl);
  }, []);

  function handleAddToCart(e) {
    toast.success("Successfully added to cart!");
    e.preventDefault();
    const item = {
      src,
      name,
      ingredients,
      price,
      unit,
      quantity: 1,
    };
    const cheeses = JSON.parse(localStorage.getItem("cheeses"));

    if (cheeses) {
      cheeses.push(item);
      localStorage.setItem("cheeses", JSON.stringify(cheeses));
    } else {
      const cheeses = [item];
      localStorage.setItem("cheeses", JSON.stringify(cheeses));
    }
  }

  return (
    <Link className="card" to={to}>
      <div className="card--img-container">
        <img src={src} alt={`${name} from murray's cheese`} />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
      <div>
        <div className="card--info">
          <h4>
            {nameStr.length === name.length
              ? nameStr
              : nameStr.padEnd(nameStr.length + 3, ".")}
          </h4>
          <p ref={ingredientRef}>
            {ingredients
              ? ingredientStr.length === intactIngredientStr.length
                ? intactIngredientStr
                : ingredientStr.padEnd(ingredientStr.length + 3, ".")
              : descStr.padEnd(descStr.length + 3, ".")}
          </p>
          <p>
            <strong>
              <span>${`${price}`.padEnd(`${price}`.length + 3, ".00")}</span>
              <span> / {unit}</span>
            </strong>
          </p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </Link>
  );
}

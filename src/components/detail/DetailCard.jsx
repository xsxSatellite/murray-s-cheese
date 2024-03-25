import { useReducer, useEffect, useRef } from "react";
import { IconContext } from "@phosphor-icons/react";
import { Form } from "react-router-dom";
import Gallery from "./Gallery";
import Accordion from "./Accordion";
import Box from "../home/Box";
import { recommendations } from "../../../data";

const opts = {
  threshold: 0,
};

const ctx = {
  quantity: 1,
};

function reducer(state, event) {
  switch (event.type) {
    case "change_quantity":
      return {
        ...state,
        quantity: event.data,
      };
    case "toggle_desc":
      handleToggle(event.id);
      return {
        ...state,
        isDescOpened: !state.isDescOpened,
      };
  }
}

function handleFormSubmission(e) {
  e.preventDefault();
}

function numPadding(quantity, price) {
  const numPadded = String(quantity * price);

  return numPadded.padEnd(numPadded.length + 3, ".00");
}

function handleToggle(id) {
  const toggleEl = document.getElementById(id);
  const state = toggleEl.getAttribute("data-state");

  switch (state) {
    case "collapsed":
      toggleEl.setAttribute("data-state", "expanded");
      break;
    case "expanded":
      toggleEl.setAttribute("data-state", "collapsed");
      break;
  }
}

function intersectionCallback(entries) {
  for (const entry of entries) {
    const ctaEl = entry.target;
    const ctaFixedEl = document.getElementById("cta-fixed");
    if (!entry.isIntersecting) {
      ctaEl.setAttribute("data-state", "hidden");
      ctaFixedEl?.setAttribute("data-state", "shown");
    } else {
      ctaEl.setAttribute("data-state", "shown");
      ctaFixedEl?.removeAttribute("data-state");
    }
  }
}

export default function DetailCard({
  pd: {
    title,
    images,
    price,
    unit,
    desc,
    review,
    ingredients,
    details,
    makerInfo,
    storageTips,
  },
}) {
  const [{ quantity }, send] = useReducer(reducer, ctx);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctaIntersectionObserver = new IntersectionObserver(
      intersectionCallback,
      opts
    );
    ctaIntersectionObserver.observe(ctaRef.current);
  }, []);

  function handleQuantityChange(e) {
    send({ type: "change_quantity", data: e.target.value });
  }

  return (
    <IconContext.Provider
      value={{
        size: 16,
      }}>
      <div className="detail-card">
        <div className="detail-card__inner">
          <section>
            <Gallery images={images} />
          </section>
          <section className="detail-card__body">
            <h1>{title}</h1>
            <div className="detail-card__body-cta">
              <span>
                ${price} / {unit}
              </span>
              <form
                onSubmit={handleFormSubmission}
                data-state="shown"
                ref={ctaRef}>
                <select
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button>
                  Add to cart - <span>${numPadding(quantity, price)}</span>
                </button>
              </form>
              <Form id="cta-fixed" onSubmit={handleFormSubmission}>
                <select
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button>
                  Add to cart - <span>${numPadding(quantity, price)}</span>
                </button>
              </Form>
            </div>
            <div className="detail-card__body-info">
              <div id="desc" data-state="collapsed">
                <p>{desc}</p>
              </div>
              <button id="desc-btn" onClick={() => handleToggle("desc")}>
                Read more
              </button>
              <p>{review}</p>
              <div className="detail-card__body-info-trivia">
                <Accordion data={ingredients} title="Ingredients" />
                <Accordion data={details} title="Details" />
                <Accordion data={makerInfo} title="About the maker" />
                <Accordion data={storageTips} title="Storage tips" />
              </div>
            </div>
          </section>
        </div>

        <Box title="Pairing Recommendations" cheeses={recommendations} />
      </div>
    </IconContext.Provider>
  );
}

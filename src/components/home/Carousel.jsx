import { useRef } from "react";
import Button from "../Button";

export default function Carousel() {
  const carouselContainerRef = useRef(null);

  function handlePosterSwitch(e) {
    const carouselContainerEl = carouselContainerRef.current;
    const btns = e.currentTarget.querySelectorAll("button");
    btns.forEach(btn => btn.classList.remove("current"));
    const btn = e.target.closest("button");
    btn.classList.add("current");
    const poster = btn.dataset.poster;

    switch (poster) {
      case "1":
        carouselContainerEl.style.transform = "translateX(0)";
        break;
      case "2":
        carouselContainerEl.style.transform = "translateX(-50%)";
        break;
    }
  }

  return (
    <section className="carousel">
      <div className="carousel--container" ref={carouselContainerRef}>
        <div className="carousel--frame">
          <div className="carousel--frame-intro">
            <h3>Couronne de Reines</h3>
            <p>
              New from our caves! A playful, donut-shaped take on classic Loire
              Valley chèvre, here for a limited time.
            </p>
            <Button type="link">Get it now</Button>
          </div>
          <picture>
            <source
              sizes="80vw"
              srcSet="/Couronne-de-Reines-portrait.avif 720w"
              media="(max-width: 719px)"
            />
            <source
              sizes="95vw"
              srcSet="/Couronne-de-Reines-landscape.avif 2480w"
              media="(min-width: 720px)"
            />
            <img
              src="/Couronne-de-Reines-portrait.avif"
              alt="Murray's cheese website product image"
            />
          </picture>
        </div>
        <div className="carousel--frame">
          <div className="carousel--frame-intro">
            <h3>Pub Dip Meets Pasta</h3>
            <p>
              New and seasonal! Our Beer Cheese Mac is flavor-packed, thanks to
              Alpine cheeses, pilsner, mustard, and scallion.
            </p>
            <Button type="link" tabindex="-1">
              Send me mac
            </Button>
          </div>
          <picture>
            <source
              sizes="80vw"
              srcSet="Beer-Cheese-Mac-And-Cheese-portrait.avif 720w"
              media="(max-width: 719px)"
            />
            <source
              sizes="95vw"
              srcSet="/Beer-Cheese-Mac-And-Cheese-landscape.avif 2480w"
              media="(min-width: 720px)"
            />
            <img
              src="/Couronne-de-Reines-portrait.avif"
              alt="Murray's cheese website product image"
            />
          </picture>
        </div>
      </div>
      <div className="carousel--switcher" onClick={handlePosterSwitch}>
        <button className="current" data-poster="1"></button>
        <button data-poster="2"></button>
      </div>
    </section>
  );
}

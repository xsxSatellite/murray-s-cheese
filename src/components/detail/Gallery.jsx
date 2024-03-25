import { useRef } from "react";
import GalleryItem from "./GalleryItem";

export default function Gallery({ images }) {
  const galleryContainerRef = useRef(null);

  function handlePosterSwitch(e) {
    const galleryContainerEl = galleryContainerRef.current;
    const btns = e.target
      .closest(".gallery--switcher")
      .querySelectorAll("button");
    btns.forEach(btn => btn.classList.remove("current"));
    e.target.classList.add("current");
    const poster = e.target.getAttribute("data-poster");

    switch (poster) {
      case "1":
        galleryContainerEl.style.transform = "translateX(0)";
        break;
      case "2":
        galleryContainerEl.style.transform = "translateX(-50%)";
        break;
    }
  }

  return (
    <div className="gallery">
      <div className="gallery--container" ref={galleryContainerRef}>
        {images.map((image, idx) => (
          <GalleryItem key={idx} src={image} />
        ))}
      </div>
      <div className="gallery--switcher" onClick={handlePosterSwitch}>
        <button className="current" data-poster="1"></button>
        <button data-poster="2"></button>
      </div>
    </div>
  );
}

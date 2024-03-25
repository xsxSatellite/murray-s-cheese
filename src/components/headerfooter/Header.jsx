import { useRef } from "react";
import { Link } from "react-router-dom";
import { List, MagnifyingGlass, Tote } from "@phosphor-icons/react";
import MenuModal from "./MenuModal";
import SearchbarModal from "./SearchbarModal";

export default function Header() {
  const menuModalRef = useRef(null);
  const searchbarModalRef = useRef(null);

  function handleMenuModalToggle(e) {
    const menuModalEl = menuModalRef.current;
    const id = e.target.closest("button").getAttribute("id");

    switch (id) {
      case "menu-modal-open-button":
        menuModalEl.showModal();
        break;
      case "menu-modal-close-button":
        menuModalEl.close();
        break;
    }
  }

  function handleSearchbarModalToggle() {
    const searchbarModalEl = searchbarModalRef.current;
    const state = searchbarModalEl.dataset.state;

    switch (state) {
      case "close":
        searchbarModalEl.show();
        searchbarModalEl.dataset.state = "open";
        break;
      case "open":
        searchbarModalEl.close();
        searchbarModalEl.dataset.state = "close";
        break;
    }
  }

  return (
    <header className="header">
      <nav>
        <ul className="header--links">
          <li>
            <button>Shop</button>
          </li>
          <li>
            <Link>Cheese clubs</Link>
          </li>
          <li>
            <Link>Classes</Link>
          </li>
          <li>
            <button onClick={handleMenuModalToggle} id="menu-modal-open-button">
              <List />
            </button>
          </li>
          <li className="header--heading-container">
            <Link className="header--heading">
              <p>Murray&apos;s</p>
              <p>Cheese</p>
            </Link>
          </li>
          <li>
            <button onClick={handleSearchbarModalToggle}>
              <MagnifyingGlass />
            </button>
          </li>
          <li>
            <Link to="cart">
              <Tote />
            </Link>
          </li>
        </ul>
      </nav>
      <MenuModal
        handleMenuModalToggle={handleMenuModalToggle}
        ref={menuModalRef}
      />
      <SearchbarModal ref={searchbarModalRef} />
    </header>
  );
}

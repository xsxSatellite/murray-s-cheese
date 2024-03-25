import { forwardRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default forwardRef(function SearchbarModal(props, ref) {
  function handleFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <dialog ref={ref} className="searchbar-modal" data-state="close">
      <div className="searchbar-modal--inner">
        <form onSubmit={handleFormSubmission}>
          <input type="text" />
          <button>Search</button>
        </form>
        <ul className="searchbar-modal--list">
          <li>
            <span>Popular searches</span>
          </li>
          <li>
            <button>
              <MagnifyingGlass />
              <span>Beechers</span>
            </button>
          </li>
          <li>
            <button>
              <MagnifyingGlass />
              <span>Raclette</span>
            </button>
          </li>
          <li>
            <button>
              <MagnifyingGlass />
              <span>Comte</span>
            </button>
          </li>
          <li>
            <button>
              <MagnifyingGlass />
              <span>Cheddar</span>
            </button>
          </li>
          <li>
            <button>
              <MagnifyingGlass />
              <span>Gruyere</span>
            </button>
          </li>
        </ul>
      </div>
    </dialog>
  );
});

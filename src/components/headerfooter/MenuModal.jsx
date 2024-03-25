import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { X, CaretRight, User } from "@phosphor-icons/react";

export default forwardRef(function MenuModal(props, ref) {
  const { handleMenuModalToggle } = props;

  return (
    <dialog ref={ref} className="menu-modal">
      <div className="menu-modal--head">
        <button
          autoFocus
          onClick={handleMenuModalToggle}
          id="menu-modal-close-button">
          <X />
        </button>
        <p>Menu</p>
      </div>
      <div className="menu-modal--body">
        <ul>
          <li>
            <button>
              <span>Cheese</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <button>
              <span>Meats</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <button>
              <span>Specialty foods</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <button>
              <span>Gifts</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <button>
              <span>Seasonal</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <Link>What&apos;s new</Link>
          </li>
          <li>
            <Link>On sale</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Cheese clubs</Link>
          </li>
          <li>
            <Link>Classes</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Cheese boards & recipes</Link>
          </li>
          <li>
            <button>
              <span>World of murrays</span>
              <CaretRight />
            </button>
          </li>
          <li>
            <Link>
              <span>My account</span>
              <User />
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-modal--foot">
        <ul>
          <li>
            <Link>Customer service</Link>
          </li>
          <li>
            <Link>Chat</Link>
          </li>
          <li>
            <Link>Shipping information</Link>
          </li>
          <li>
            <Link>FAQS</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Press</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
        </ul>
      </div>
    </dialog>
  );
});

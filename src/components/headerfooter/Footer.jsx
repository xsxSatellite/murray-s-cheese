import { Link } from "react-router-dom";
import {
  InstagramLogo,
  TwitterLogo,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  function handleFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <footer className="footer">
      <div className="footer--info">
        <ul>
          <li>
            <span>Shop</span>
          </li>
          <li>
            <Link>Store locator</Link>
          </li>
          <li>
            <Link>Cheese</Link>
          </li>
          <li>
            <Link>Meats</Link>
          </li>
          <li>
            <Link>Specialty foods</Link>
          </li>
          <li>
            <Link>housewares</Link>
          </li>
          <li>
            <Link>Cheese clubs</Link>
          </li>
          <li>
            <Link>NYC local delivery</Link>
          </li>
        </ul>
        <ul>
          <li>
            <span>Expore</span>
          </li>
          <li>
            <Link>Cheese bar</Link>
          </li>
          <li>
            <Link>Wholesale</Link>
          </li>
          <li>
            <Link>Catering</Link>
          </li>
        </ul>
        <ul>
          <li>
            <span>Learn</span>
          </li>
          <li>
            <Link>Our story</Link>
          </li>
          <li>
            <Link>Cheese boards</Link>
          </li>
          <li>
            <Link>Recipes</Link>
          </li>
          <li>
            <Link>Guides</Link>
          </li>
          <li>
            <Link>Affiliate program</Link>
          </li>
          <li>
            <Link>Refer a friend</Link>
          </li>
          <li>
            <Link>Find your cheese quiz</Link>
          </li>
        </ul>
        <ul>
          <li>
            <span>Support</span>
          </li>
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
        </ul>
        <div className="contact-detail">
          <div className="contact-detail--container">
            <span className="contact-detail--title">Sign up</span>
            <p>Sign up for cheezE-mail. Save 10% on your first order!</p>
            <form onClick={handleFormSubmission}>
              <input type="text" name="" id="" />
              <button>Sign up</button>
            </form>
          </div>
          <div className="contact-detail--container">
            <span className="contact-detail--title">Get in touch</span>
            <span>+1-888-MYCHEEZ</span>
            <span>+18886924339</span>
            <span>+12122433289</span>
            <span>MON-FRI 9:00 AM</span>
            <span>-6:00 PM ET</span>
            <div className="socials">
              <Link>
                <InstagramLogo size={32} />
              </Link>
              <Link>
                <TwitterLogo size={32} />
              </Link>
              <Link>
                <FacebookLogo size={32} />
              </Link>
              <Link>
                <TiktokLogo size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-policy-info">
        <p>Copyright &copy;2024</p>
        <Link>Privacy policy</Link>
        <Link>CA - Do not sell or share my personal information</Link>
        <Link>Your privacy choices</Link>
      </div>
    </footer>
  );
}

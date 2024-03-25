import { Link } from "react-router-dom";

export default function Button({
  look = "hollow",
  type = "button",
  tabindex,
  children,
}) {
  switch (type) {
    case "button":
      return <button className={look}>{children}</button>;
    case "link":
      return (
        <Link className={look} tabIndex={tabindex ? tabindex : ""}>
          {children}
        </Link>
      );
  }
}

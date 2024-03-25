import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

export default function Accordion({ data, title }) {
  const [state, setState] = useState("collapsed");

  function handleToggle() {
    state === "collapsed" ? setState("expanded") : setState("collapsed");
  }

  if (!Array.isArray(data)) {
    return (
      <div className="accordion" data-state={state} onClick={handleToggle}>
        <p>
          {title} {state === "expanded" ? <Minus /> : <Plus />}
        </p>
        <div className="inner">
          <p>{data}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="accordion" data-state={state} onClick={handleToggle}>
      <p>
        {title} {state === "expanded" ? <Minus /> : <Plus />}
      </p>
      <div className="inner">
        <ul>
          {data.map((datum, idx) => (
            <li key={idx}>{datum}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

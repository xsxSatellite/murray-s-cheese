import Button from "../Button";
import Card from "../home/Card";

export default function Box({ title, intro, cheeses, cta }) {
  return (
    <section className="box">
      <div className="box--intro">
        {title && <h2>{title}</h2>}
        {intro && <p>{intro}</p>}
      </div>
      <div className="card-container">
        {cheeses.map((cheese, idx) => (
          <Card key={idx} cheese={cheese} />
        ))}
        {cta && (
          <div className="cta">
            <p>{intro}</p>
            <Button type="link">{cta}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

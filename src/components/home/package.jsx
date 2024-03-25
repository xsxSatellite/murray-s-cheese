import Button from "../Button";

export default function Package() {
  return (
    <section className="package">
      <div>
        <img src="/package.avif" alt="package img by murray's cheese" />
      </div>
      <div className="package--info">
        <p>Let&apos;s cheese-ify your inbox</p>{" "}
        <Button>Sign up for emails</Button>
      </div>
    </section>
  );
}

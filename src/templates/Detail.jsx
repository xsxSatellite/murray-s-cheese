import { useLoaderData } from "react-router-dom";
import { cheeses } from "../../data";
import DetailCard from "../components/detail/DetailCard";

export default function Detail() {
  const pd = useLoaderData();

  return (
    <main className="detail">
      <section>
        <DetailCard pd={pd} />
      </section>
    </main>
  );
}

function loadProduct({ params }) {
  const pdName = params.pdName;
  const [pd] = cheeses.filter(cheese => cheese.name === pdName);

  return pd;
}

export { loadProduct };

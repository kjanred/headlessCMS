import Layout from "../components/layout";
import Link from "next/link";
import { getSortedProductsList } from "../lib/data";


export async function getStaticProps() {
  const allData = await getSortedProductsList();
  return {
    props: { allData },
  };
}

//exports our home page component
export default function Products({ allData }) {
  return (
    <Layout>
      <div className="col">
      <h1>List of Holy Names</h1>
      <div className="list-group">
        {allData &&
          allData.map(({ id, name }) => (
            <Link
              key={id}
              href={`/products/${id}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
        </div>
        </div>
    </Layout>
  );
}

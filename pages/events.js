import Layout from "../components/layout";
import Link from "next/link";
import { getSortedEventsList } from "../lib/data";

export async function getStaticProps() {
  const allData = await getSortedEventsList();
  return {
    props: { allData },
  };
}

//exports our home page component
export default function Events({ allData }) {
  return (
    <Layout>
      <h1>List of Holy Names</h1>
      <div className="list-group">
        {allData &&
          allData.map(({ id, name }) => (
            <Link
              key={id}
              href={`/events/${id}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
      </div>
    </Layout>
  );
}

import Layout from '../components/layout';
import Link from 'next/link';
import { getSortedList } from '../lib/data';


export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: { allData }
  };
}

//exports our home page component
export default function Home( { allData }) {
  return (
    <Layout home>
<h1>List of Dead Names</h1>
<div className="list-group">
    {allData.map(
        ({id, name}) => (
          <Link key ={id} href={`/${id}`} className="list-group-item list-group-item-action">
            {name}
          </Link>
        )
    )
    }
</div>
</Layout>
  );
}
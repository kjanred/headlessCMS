import Layout from '../components/layout';
import Link from 'next/link';
import { getResourcesList } from '../lib/data';


export async function getStaticProps() {
  const allData = getResourcesList();
  return {
    props: { allData }
  };
}

//exports our home page component
export default function Resources( { allData }) {
  return (
    <Layout>
<h1>Some helpful resources</h1>
<div className="list-group container justify-content-center">
    {allData.map(
        ({id, name, url, description}) => (
       <div className="list-group-item list-group-item-action col-5">
          <Link key={id} href={url} className="resource-link" alt={description}>
            {name}
          </Link>
            <p>{description}</p>
          </div>
        )
    )
    }
</div>
</Layout>
  );
}
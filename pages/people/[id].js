import Layout from "../../components/layout";
import { getAllIds, getData } from "../../lib/data";
export async function getStaticProps({ params }) {
  const itemData = await getData(params.ID);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h3 className="card-title">
            <strong>Name: </strong>
            {itemData.name}
          </h3>
          <h4 className="card-subtitle mb-2 text-body-secondary">
            <strong>Fav color: </strong>
            {itemData.post_title}
          </h4>
        </div>
      </article>
    </Layout>
  );
}

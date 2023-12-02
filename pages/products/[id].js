import Layout from "../../components/layout";
import { getAllProductsIds, getProductsData } from "../../lib/data";
export async function getStaticProps({ params }) {
  const itemData = await getProductsData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllProductsIds();
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
            <strong>{itemData.acf_fields.name}</strong>  {itemData.acf_fields.price}
          </h3>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            <strong>Description: </strong>
            {itemData.acf_fields.description}
          </h5>
        </div>
      </article>
    </Layout>
  );
}

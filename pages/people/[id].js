import Layout from "../../components/layout";
import { getAllIds, getData } from "../../lib/data";
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
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
            <strong>First Name: </strong> {itemData.acf_fields.first_name} <strong>Last Name: </strong> {itemData.acf_fields.last_named}
          </h3>
          <h4 className="card-subtitle mb-2 text-body-secondary">
            <strong>Description: </strong>
            {itemData.acf_fields.email}
          </h4>
        </div>
      </article>
    </Layout>
  );
}

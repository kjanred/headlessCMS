import Layout from "../../components/layout";
import { getAllEventsIds, getEventsData } from "../../lib/data";
export async function getStaticProps({ params }) {
  const itemData = await getEventsData(params.id);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getAllEventsIds();
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
            <strong>Event: </strong> {itemData.acf_fields.name} <strong>@</strong> {itemData.acf_fields.date}
          </h3>
          <h4 className="card-subtitle mb-2 text-body-secondary">
            <strong>Description: </strong>
            {itemData.acf_fields.description}
          </h4>
        </div>
      </article>
    </Layout>
  );
}

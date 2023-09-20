import Layout from "@/components/layout";
import { getAllIds, getData } from "../lib/data";

export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    return {
        props: {
           itemData 
        }
    };
}

export async function getStaticPaths() {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    };
}

export default function Entry( { itemData } ) {
    return (
        <Layout>
            <article className="card col-6">
            <div className="card-body">
            <h3 className="card-title">{ itemData.name}</h3>
            <h4 className="card-subtitle mb-2 text-body-secondary">{itemData.favColor}</h4>
            <p className="card-text">{itemData.favFood}</p>
            <a href="#" className="card-link">{itemData.favAnimal}</a>
            <h4>Skills:</h4>
            <ul>
            {itemData.skills && itemData.skills.map(
        ({id, skill, skillInfo}) => (
            <li key ={id} className="list-group-item list-group-item-action">
         <h5>{skill}</h5>
        <h6>{skillInfo}</h6> 
            </li>
        )
    )
    }
    </ul>
            </div>
            </article>
        </Layout>
    );
}
import Layout from "../../components/layout";
import { getAllIds, getData } from "../../lib/data-firebase";

export async function getStaticProps( { params } ) {
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

export default function Entry( { itemData } ) {
    return (
        <Layout>
            <article className="card col-6">
            <div className="card-body">
            <h3 className="card-title"><strong>Name: </strong>{ itemData.name}</h3>
            <h4 className="card-subtitle mb-2 text-body-secondary"><strong>Fav color: </strong>{itemData.favColor}</h4>
            <h4 className="card-subtitle mb-2 text-body-secondary"><strong>Fav food: </strong>{itemData.favFood}</h4>
            <h4 className="card-subtitle mb-2 text-body-secondary"><strong>Fav animal: </strong>{itemData.favAnimal}</h4>
            <br />
            <h4 className="ms-4">skills:</h4>
            <ul className="ms-4">
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